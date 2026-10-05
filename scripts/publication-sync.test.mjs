import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeOrcidWorks,
  reconcileProviderMetadata,
} from './publication-sync.mjs';

test('normalizes ORCID works into deterministic provider metadata', () => {
  const result = normalizeOrcidWorks({
    group: [
      {
        work: [
          {
            'put-code': 2,
            title: { title: { value: 'Older work' } },
            type: 'journal-article',
            'publication-date': { year: { value: '2024' } },
            'external-ids': {
              'external-id': [
                { 'external-id-type': 'doi', 'external-id-value': '10.1000/older' },
              ],
            },
          },
          {
            'put-code': 1,
            title: { title: { value: 'Newest work' } },
            type: 'conference-paper',
            'publication-date': { year: { value: '2026' } },
            'external-ids': { 'external-id': [] },
          },
        ],
      },
    ],
  });

  assert.deepEqual(result, [
    {
      orcidWorkId: '1',
      doi: null,
      title: 'Newest work',
      type: 'conference-paper',
      year: 2026,
    },
    {
      orcidWorkId: '2',
      doi: '10.1000/older',
      title: 'Older work',
      type: 'journal-article',
      year: 2024,
    },
  ]);
});

test('returns only new or changed provider metadata and preserves editorial fields', () => {
  const proposals = reconcileProviderMetadata({
    remote: [
      { orcidWorkId: '1', doi: '10.1000/new', title: 'New work', type: 'journal-article', year: 2026 },
      { orcidWorkId: '2', doi: '10.1000/changed', title: 'Changed title', type: 'journal-article', year: 2025 },
    ],
    local: [
      {
        id: 'existing',
        title: 'Original editorial title',
        summary: 'Keep this authored summary.',
        themes: ['vehicle-manipulator-systems'],
        provider: { orcidWorkId: '2', doi: '10.1000/changed', title: 'Old provider title', type: 'journal-article', year: 2025 },
      },
    ],
  });

  assert.deepEqual(proposals, [
    {
      kind: 'new',
      provider: { orcidWorkId: '1', doi: '10.1000/new', title: 'New work', type: 'journal-article', year: 2026 },
    },
    {
      kind: 'changed',
      id: 'existing',
      provider: { orcidWorkId: '2', doi: '10.1000/changed', title: 'Changed title', type: 'journal-article', year: 2025 },
    },
  ]);
});
