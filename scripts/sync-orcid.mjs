import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeOrcidWorks, reconcileProviderMetadata } from './publication-sync.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const orcidId = process.env.ORCID_ID ?? '0000-0002-8953-4564';
const endpoint = `https://pub.orcid.org/v3.0/${orcidId}/works`;
const outputPath = resolve(process.env.SYNC_OUTPUT_PATH ?? 'content-proposals/publications/orcid.json');
const snapshotPath = resolve(root, 'src/data/publications/provider-snapshot.json');

const response = await fetch(endpoint, {
  headers: {
    Accept: 'application/json',
    'User-Agent': 'olanrewajufarooq.github.io publication sync',
  },
});

if (!response.ok) {
  throw new Error(`ORCID request failed with ${response.status} ${response.statusText}`);
}

const remote = normalizeOrcidWorks(await response.json());
const local = JSON.parse(await readFile(snapshotPath, 'utf8')).works ?? [];
const proposals = reconcileProviderMetadata({ remote, local });

if (proposals.length === 0) {
  console.log('No publication proposals detected.');
  process.exit(0);
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(
  outputPath,
  `${JSON.stringify({ source: 'orcid', orcidId, proposals }, null, 2)}\n`,
  'utf8',
);

console.log(`Wrote ${proposals.length} publication proposal(s) to ${outputPath}`);
