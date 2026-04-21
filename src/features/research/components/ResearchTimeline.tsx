import { useMemo, useState } from 'react';
import styles from '../styles/research.module.css';
import type { ResearchThemeSummary } from '../../../shared/types/research';

interface Props {
  themes: ResearchThemeSummary[];
}

type ThemeFilter = 'all' | 'ongoing' | 'completed' | 'planned';

export default function ResearchTimeline({ themes }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<ThemeFilter>('all');

  const filteredThemes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return themes.filter((theme) => {
      const matchesFilter = filter === 'all' ? true : theme.status === filter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        theme.title.toLowerCase().includes(normalizedQuery) ||
        theme.summary.toLowerCase().includes(normalizedQuery) ||
        theme.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery));

      return matchesFilter && matchesQuery;
    });
  }, [themes, query, filter]);

  return (
    <section className={styles.section}>
      <div className={styles.controls}>
        <label className={styles.searchField}>
          <span className="sr-only">Search research themes</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search research themes"
            className={styles.searchInput}
          />
        </label>

        <div className={styles.filterGroup} role="group" aria-label="Filter research themes">
          {(['all', 'ongoing', 'completed', 'planned'] as ThemeFilter[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`${styles.filterButton} ${filter === value ? styles.filterButtonActive : ''}`}
              aria-pressed={filter === value}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {filteredThemes.length > 0 ? (
        <ol className={styles.timelineList}>
          {filteredThemes.map((theme) => (
            <li key={theme.slug} className={styles.timelineItem}>
              <article className={styles.themeEntry}>
                <header className={styles.themeHeader}>
                  <div>
                    <h3 className={styles.themeTitle}>
                      <a href={`/research/${theme.slug}`}>{theme.title}</a>
                    </h3>
                    <p className={styles.themePeriod}>
                      {theme.period} · <span className={styles.themeStatus}>{theme.status}</span>
                    </p>
                  </div>
                </header>

                <p className={styles.themeSummary}>{theme.summary}</p>

                {theme.keywords.length > 0 && (
                  <ul className={styles.keywordList}>
                    {theme.keywords.slice(0, 5).map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <div className={styles.emptyBlock}>
          <p>No research themes match the current search or filter.</p>
        </div>
      )}
    </section>
  );
}