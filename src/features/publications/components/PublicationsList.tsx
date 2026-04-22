import React, { useState, useMemo } from 'react';
import type { Publication } from '../../../shared/types';
import publicationsData from '../../../data/publications/publications.json';

interface Props {
  publications?: Publication[];
}

const PublicationsList: React.FC<Props> = ({ publications: initialPubs }) => {
  const publications = (initialPubs || (publicationsData as any)?.publications || []) as Publication[];
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    return publications
      .filter((pub) => pub.status === 'accepted' || pub.status === 'published')
      .filter((pub) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
          pub.title.toLowerCase().includes(term) ||
          pub.venue?.toLowerCase().includes(term) ||
          pub.authors.some((author) => author.name.toLowerCase().includes(term))
        );
      });
  }, [searchTerm, publications]);

  const grouped = useMemo(() => {
    const accepted: Publication[] = [];
    const published: Publication[] = [];
    
    filtered.forEach((pub) => {
      if (pub.status === 'accepted') {
        accepted.push(pub);
      } else {
        published.push(pub);
      }
    });

    const groupByYear = (pubs: Publication[]) => {
      const groups: { [key: number]: Publication[] } = {};
      pubs.forEach((pub) => {
        const year = pub.year || new Date().getFullYear();
        if (!groups[year]) {
          groups[year] = [];
        }
        groups[year].push(pub);
      });
      return Object.entries(groups)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .reduce((acc, [year, p]) => {
          acc[year] = p;
          return acc;
        }, {} as { [key: string]: Publication[] });
    };

    return {
      accepted: groupByYear(accepted),
      published: groupByYear(published)
    };
  }, [filtered]);

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
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No publications match your search criteria.</p>
        </div>
      ) : (
        <div className="publications-list">
          {Object.keys(grouped.accepted).length > 0 && (
            <div className="status-section">
              <h3 className="status-heading">Accepted</h3>
              {Object.entries(grouped.accepted).map(([year, pubs]) => (
                <div key={`accepted-${year}`} className="year-group">
                  <h4 className="year-heading">{year}</h4>
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
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {Object.keys(grouped.published).length > 0 && (
            <div className="status-section">
              <h3 className="status-heading">Published</h3>
              {Object.entries(grouped.published).map(([year, pubs]) => (
                <div key={`published-${year}`} className="year-group">
                  <h4 className="year-heading">{year}</h4>
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
                          {pub.publisherUrl && (
                            <a
                              href={pub.publisherUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pub-link"
                            >
                              Read paper
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
        </div>
      )}

      <div className="results-info">
        <p>
          {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
};

export default PublicationsList;
