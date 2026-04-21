# Types

TypeScript type definitions for all data structures and component props.

## Type Files

- **site.ts**: Site configuration and profile types
- **education.ts**: Degree, joint degree, thesis, and advisor types
- **publication.ts**: Publication, author, and citation types
- **certificate.ts**: Certificate and provider types
- **award.ts**: Award types
- **teaching.ts**: Teaching experience types
- **research.ts**: Research theme and metadata types
- **navigation.ts**: Navigation item types
- **social.ts**: Social media link types
- **theme.ts**: Theme system and values types

## Export Pattern

All types are exported from `index.ts`:

```typescript
export type { Site, Profile } from './site';
export type { Degree, JointDegree, Education } from './education';
// ... more exports
```

## Usage

```typescript
import type { Publication, Degree, Award } from '../shared/types';

interface Props {
  publications: Publication[];
  education: Degree[];
}
```

## Type Guards

Some modules include type guard functions:

```typescript
import { isJointDegree } from '../shared/types';

if (isJointDegree(degree)) {
  // Handle joint degree
}
```

## Adding New Types

1. Create new `.ts` file in `src/shared/types/`
2. Export types with `export type`
3. Re-export in `index.ts`
4. Use in components with `import type { ... }`
