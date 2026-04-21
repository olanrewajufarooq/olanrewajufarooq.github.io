import certificatesData from '../../../data/about/certificates.json';
import styles from '../styles/about.module.css';

export default function CertificatesSection() {
  const providers = certificatesData.providers;

  return (
    <section className={styles.section}>
      <header className="section-heading">
        <p className="section-heading__eyebrow">Certificates</p>
        <h2 className="section-heading__title">Professional Certifications</h2>
      </header>

      <div className={styles.providerGroups}>
        {providers.map((provider) => (
          <section key={provider.id} className={styles.providerSection}>
            <header className={styles.providerHeader}>
              <h3 className={styles.providerTitle}>{provider.name}</h3>
            </header>

            <div
              className={styles.certificateScroller}
              role="region"
              aria-label={`${provider.name} certificates`}
            >
              <div className={styles.certificateTrack}>
                {provider.items.map((item) => (
                  <article key={item.id} className={styles.certificateItem}>
                    <div className={styles.certificateImageWrap}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={styles.certificateImage}
                        loading="lazy"
                      />
                    </div>

                    <div className={styles.certificateBody}>
                      <h4 className={styles.certificateTitle}>{item.name}</h4>
                      <p className={styles.certificateMeta}>
                        {item.issuer}
                        {item.platform ? ` · ${item.platform}` : ''}
                      </p>
                      <p className={styles.certificateDate}>{item.date}</p>

                      {item.verificationUrl && (
                        <p className={styles.certificateLinkRow}>
                          <a
                            href={item.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Verify certificate
                          </a>
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
