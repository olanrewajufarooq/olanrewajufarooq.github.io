function readValue(value) {
  return value?.value ?? null;
}

function normalizeDoi(value) {
  if (!value) return null;

  return value
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')
    .replace(/^doi:/i, '')
    .toLowerCase();
}

function getExternalId(work, type) {
  const externalId = work['external-ids']?.['external-id']?.find(
    (entry) => entry['external-id-type']?.toLowerCase() === type,
  );

  return externalId?.['external-id-value'] ?? null;
}

function getWorks(payload) {
  if (Array.isArray(payload)) return payload;

  return payload?.group?.flatMap((group) => group.work ?? []) ?? [];
}

export function normalizeOrcidWorks(payload) {
  return getWorks(payload)
    .map((work) => {
      const year = Number.parseInt(readValue(work['publication-date']?.year), 10);

      return {
        orcidWorkId: String(work['put-code']),
        doi: normalizeDoi(getExternalId(work, 'doi')),
        title: readValue(work.title?.title) ?? 'Untitled work',
        type: work.type ?? 'unknown',
        year: Number.isNaN(year) ? null : year,
      };
    })
    .filter((work) => work.orcidWorkId !== 'undefined')
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));
}

function providerFieldsEqual(left, right) {
  return ['orcidWorkId', 'doi', 'title', 'type', 'year'].every(
    (field) => left?.[field] === right?.[field],
  );
}

export function reconcileProviderMetadata({ remote, local }) {
  const localByProviderKey = new Map();

  for (const record of local) {
    if (record.provider?.orcidWorkId) {
      localByProviderKey.set(`orcid:${record.provider.orcidWorkId}`, record);
    }
    if (record.provider?.doi) {
      localByProviderKey.set(`doi:${normalizeDoi(record.provider.doi)}`, record);
    }
  }

  return remote.flatMap((provider) => {
    const existing =
      (provider.orcidWorkId && localByProviderKey.get(`orcid:${provider.orcidWorkId}`)) ||
      (provider.doi && localByProviderKey.get(`doi:${normalizeDoi(provider.doi)}`));

    if (!existing) return [{ kind: 'new', provider }];
    if (providerFieldsEqual(existing.provider, provider)) return [];

    return [{ kind: 'changed', id: existing.id, provider }];
  });
}
