import React, { useState, useMemo } from 'react';
import type { Publication } from '../../../shared/types';
import publicationsData from '../../../data/publications/publications.json';

interface Props {
  publications?: Publication[];
}

const PublicationsList: React.FC<Props> = ({ publications: initialPubs }) => {
  const publications = (initialPubs || (publicationsData as any)?.publications || []) as Publication[];
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchTerm === '' ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.venue?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some((author) => author.name.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesStatus = statusFilter === 'all' || pub.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter, publications]);

  const grouped = useMemo(() => {
    const groups: { [key: number]: Publication[] } = {};
    filtered.forEach((pub) => {
      const year = pub.year || new Date().getFullYear();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(pub);
    });
    return Object.entries(groups)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .reduce((acc, [year, pubs]) => {
        acc[year] = pubs;
        return acc;
      }, {} as { [key: string]: Publication[] });
  }, [filtered]);

  const statuses = Array.from(
    new Set(publications.map((pub) => pub.status))
  ).sort();

  return (
    <div className="publications-container">
      <div className="search-section">
        <div className="search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search publications"
          />
        </div>

        <div className="filter-section">
          <label htmlFor="status-filter" className="filter-label">
            Status:
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No publications match your search criteria.</p>
        </div>
      ) : (
        <div className="publications-list">
          {Object.entries(grouped).map(([year, pubs]) => (
            <div key={year} className="year-group">
              <h3 className="year-heading">{year}</h3>
              <ul className="publications-in-year">
                {pubs.map((pub) => (
                  <li key={pub.id} className="publication-item">
                    <div className="pub-header">
                      <div className="pub-meta">
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-authors">
                          {pub.authors.map((a, idx) => (
                            <span key={a.name}>
                              {a.isMe ? <strong>{a.name}</strong> : a.name}
                              {idx < pub.authors.length - 1 && ', '}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>

                    <p className="pub-venue">
                      <em>{pub.venue}</em> {pub.year}
                    </p>

                    <div className="pub-footer">
                      <div className="pub-status">
                        <span className={`status-badge status-${pub.status}`}>
                          {pub.status.charAt(0).toUpperCase() +
                            pub.status.slice(1)}
                        </span>
                      </div>
                      {pub.publisherUrl && (
                        <a
                          href={pub.publisherUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pub-link"
                        >
                          Read paper →
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="results-info">
        <p>
          Showing {filtered.length} of {publications.length} publication
          {publications.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
};

export default PublicationsList;
