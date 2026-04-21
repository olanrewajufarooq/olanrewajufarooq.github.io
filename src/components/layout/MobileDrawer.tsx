import React, { useEffect, useState } from 'react';
import navData from '../../data/profile.json';
import socialData from '../../data/profile.json';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

const MobileDrawer: React.FC<Props> = ({ isOpen = false, onClose }) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="mobile-drawer-overlay" onClick={handleClose} aria-hidden="true" />
      )}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <div className="drawer-content">
          <button
            className="drawer-close"
            onClick={handleClose}
            aria-label="Close drawer"
          >
            <span></span>
            <span></span>
          </button>

          <nav className="drawer-nav">
            <ul className="nav-list">
              {navData.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={handleClose}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="drawer-divider"></div>

          <div className="drawer-social">
            <div className="social-label">Connect</div>
            <ul className="social-list">
              {socialData.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="drawer-divider"></div>

          <div className="drawer-cta">
            <a
              href="/assets/cv.pdf"
              download="Farooq_Olanrewaju_CV.pdf"
              className="cv-link"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;

const styles = `
.mobile-drawer {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-drawer, 1000);
  width: 280px;
  background-color: var(--color-bg-primary);
  border-left: 1px solid var(--color-border);
  transform: translateX(100%);
  transition: transform var(--transition-normal);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  overflow-y: auto;

  @media (max-width: var(--breakpoint-md)) {
    display: flex;
    flex-direction: column;

    &.open {
      transform: translateX(0);
    }
  }
}

.mobile-drawer-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-drawer, 1000) - 1);
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn var(--transition-fast);

  @media (max-width: var(--breakpoint-md)) {
    display: block;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.drawer-content {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.drawer-close {
  align-self: flex-end;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: var(--space-4);

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-text);
    transition: transform var(--transition-fast);

    &:first-child {
      transform: rotate(45deg) translateY(8px);
    }

    &:last-child {
      transform: rotate(-45deg) translateY(-8px);
    }
  }

  &:hover span {
    background-color: var(--color-primary);
  }
}

.drawer-nav {
  flex: 1;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: none;
  padding: 0;
  margin: 0;

  li a {
    display: block;
    padding: var(--space-3) var(--space-4);
    color: var(--color-text);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    font-weight: var(--font-weight-medium);

    &:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-primary);
    }

    &:active {
      background-color: var(--color-bg-tertiary);
    }
  }
}

.drawer-divider {
  height: 1px;
  background-color: var(--color-border);
  margin: var(--space-4) 0;
}

.drawer-social {
}

.social-label {
  padding: 0 var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: none;
  padding: 0;
  margin: 0;

  li a {
    display: block;
    padding: var(--space-2) var(--space-4);
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);

    &:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-primary);
    }
  }
}

.drawer-cta {
  padding: var(--space-4) 0 0 0;
  margin-top: auto;
}

.cv-link {
  display: block;
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--color-primary-dark, var(--color-primary));
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}
`;
