import React, { useRef, useState } from 'react';
import type { CertificateItem, CertificatesData, CertificateProviderGroup } from '../../../shared/types';
import certificatesData from '../../../data/about/certificates.json';

const CertificatesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const element = scrollContainerRef.current;
    if (element) {
      setCanScrollLeft(element.scrollLeft > 0);
      setCanScrollRight(element.scrollLeft < element.scrollWidth - element.clientWidth);
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const element = scrollContainerRef.current;
    if (element) {
      const scrollAmount = 300;
      element.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  const data = certificatesData as CertificatesData;
  const providers = data.providers || [];

  // Flatten all certificates for display
  const allCertificates: Array<CertificateItem & { providerName: string }> = [];
  providers.forEach((provider) => {
    provider.items.forEach((item) => {
      allCertificates.push({
        ...item,
        providerName: provider.name,
      });
    });
  });

  if (!allCertificates || allCertificates.length === 0) {
    return (
      <section className="certificates-section">
        <h2 className="section-title">Certificates & Credentials</h2>
        <div className="empty-state">
          <p>No certificates to display at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="certificates-section">
      <h2 className="section-title">Certificates & Credentials</h2>

      <div className="scroll-container-wrapper">
        {canScrollLeft && (
          <button
            className="scroll-button scroll-button-left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12.707 5.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" />
            </svg>
          </button>
        )}

        <div className="scroll-container" ref={scrollContainerRef} onScroll={checkScroll}>
          {allCertificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="cert-icon">
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} />
                ) : (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M24 2L28 12H38V28H24L10 28V12H20L24 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-provider">{cert.providerName}</p>
              {cert.date && (
                <p className="cert-date">Issued: {cert.date}</p>
              )}
              {cert.verificationUrl && (
                <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Credential →
                </a>
              )}
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            className="scroll-button scroll-button-right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7.293 14.707a1 1 0 010-1.414L11.586 10 7.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
