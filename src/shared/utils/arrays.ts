export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function flatten<T>(arrays: T[][]): T[] {
  return arrays.reduce((acc, arr) => [...acc, ...arr], []);
}

export function group<T>(array: T[], key: (item: T) => string): Record<string, T[]> {
  return array.reduce(
    (acc, item) => {
      const k = key(item);
      return { ...acc, [k]: [...(acc[k] || []), item] };
    },
    {} as Record<string, T[]>
  );
}

export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function compact<T>(array: (T | null | undefined)[]): T[] {
  return array.filter((item): item is T => item != null);
}
