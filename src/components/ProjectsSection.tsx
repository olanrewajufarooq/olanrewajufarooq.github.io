import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  url: string;
  date: string;
  description: string;
  technologies: string[];
}

interface Props {
  projects: Project[];
  showAll?: boolean;
}

export default function ProjectsSection({ projects, showAll = false }: Props) {
  const [view, setView] = useState<'grid' | 'timeline'>('grid');
  const displayProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div>
      <div className="view-toggle-container">
        <div className="view-toggle">
          <button
            className={`toggle-btn${view === 'grid' ? ' active' : ''}`}
            onClick={() => setView('grid')}
          >
            Grid View
          </button>
          <button
            className={`toggle-btn${view === 'timeline' ? ' active' : ''}`}
            onClick={() => setView('timeline')}
          >
            Timeline View
          </button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="projects-grid">
          {displayProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h4>{project.title}</h4>
              <div className="project-date">{project.date}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-timeline">
          {displayProjects.map((project) => (
            <div key={project.id} className="timeline-item">
              <h4>{project.title}</h4>
              <div className="project-date">{project.date}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
