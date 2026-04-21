// Particle Animation Generator
class ParticleBackground {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.options = {
      particleCount: options.particleCount || 50,
      density: options.density || 'normal', // sparse, normal, dense
      animationSpeed: options.animationSpeed || 'normal', // slow, normal, fast
      ...options
    };

    this.particles = [];
    this.init();
  }

  init() {
    this.createParticles();
    this.render();
  }

  createParticles() {
    const count = this.options.particleCount;
    
    for (let i = 0; i < count; i++) {
      const particle = {
        x: Math.random() * this.container.clientWidth,
        y: Math.random() * this.container.clientHeight,
        size: this.getRandomSize(),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 100,
        maxLife: 100,
        className: `particle particle-${(i % 8) + 1}`,
        type: Math.random() > 0.85 ? 'large' : Math.random() > 0.5 ? 'normal' : 'small'
      };

      this.particles.push(particle);
    }
  }

  getRandomSize() {
    const rand = Math.random();
    if (rand > 0.85) return 'large';
    if (rand > 0.5) return 'normal';
    return 'small';
  }

  render() {
    // Clear container
    this.container.innerHTML = '';

    // Create particle elements
    this.particles.forEach((particle, index) => {
      const particleEl = document.createElement('div');
      particleEl.className = `${particle.className} ${particle.type}`;
      particleEl.style.left = particle.x + 'px';
      particleEl.style.top = particle.y + 'px';
      particleEl.style.animationDelay = (index * 0.1) + 's';
      
      this.container.appendChild(particleEl);
    });
  }

  destroy() {
    this.container.innerHTML = '';
  }
}

// Initialize particle background on page load
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.getElementById('hero-particles');
  if (heroSection) {
    new ParticleBackground('hero-particles', {
      particleCount: 60,
      density: 'normal',
      animationSpeed: 'normal'
    });
  }
});

// Reinitialize particles on window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const heroSection = document.getElementById('hero-particles');
    if (heroSection && heroSection.childNodes.length === 0) {
      new ParticleBackground('hero-particles', {
        particleCount: 60,
        density: 'normal',
        animationSpeed: 'normal'
      });
    }
  }, 250);
});
