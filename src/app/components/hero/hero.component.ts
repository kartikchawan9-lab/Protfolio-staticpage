import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimeCharComponent } from '../anime-char/anime-char.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, AnimeCharComponent],
  template: `
    <section class="hero-section">
      <div class="container hero-grid">
        <!-- Left: Text Content -->
        <div class="content-wrapper" appScrollReveal>
          <div class="badge">
            <span class="status-dot"></span> Available for new opportunities
          </div>
          
          <h1 class="name">{{ hero.name }}</h1>
          <h2 class="role">{{ hero.role }}</h2>
          
          <p class="summary">{{ hero.summary }}</p>
          
          <div class="actions">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>

          <div class="tech-stack-mini">
            <span>Specializing in:</span>
            <div class="icons">
               <span class="tech">.NET Core</span>
               <span class="tech">Azure</span>
               <span class="tech">Angular</span>
               <span class="tech">SQL</span>
            </div>
          </div>
        </div>

        <!-- Right: Anime Character -->
        <div class="visual-wrapper">
          <app-anime-char src="assets/images/hero-char.png" alt="Professional Software Engineer Anime Character"></app-anime-char>
        </div>
      </div>
      
      <!-- Scroll Hint -->
       <a href="#about" class="scroll-hint">
          <span>Explore</span>
          <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      overflow: hidden;
      background: radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.05) 0%, transparent 50%);
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;
      width: 100%;
      
      @media (min-width: 992px) {
        grid-template-columns: 1.2fr 1fr; /* Text larger than visual */
      }
    }

    .content-wrapper {
      z-index: 2;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.85rem;
      background: rgba(56, 189, 248, 0.1); /* Very subtle blue bg */
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 99px;
      font-size: 0.85rem;
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: 2rem;
    }
    
    .status-dot {
      width: 6px; height: 6px;
      background: var(--primary-color);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--primary-color);
    }

    .name {
      font-size: clamp(3rem, 5vw, 4.5rem);
      line-height: 1.1;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
      color: var(--text-primary);
    }

    .role {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      font-weight: 500;
      color: var(--text-secondary); /* Muted */
      margin-bottom: 1.5rem;
    }

    .summary {
      font-size: 1.125rem;
      color: var(--text-tertiary); /* Even more muted */
      max-width: 540px;
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 3.5rem;
    }
    
    .tech-stack-mini {
      border-top: 1px solid var(--border-color);
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      
      span {
        font-size: 0.85rem;
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .icons {
        display: flex;
        gap: 1.5rem;
        
        .tech {
          font-weight: 600;
          color: var(--text-secondary);
        }
      }
    }

    /* 3D Visual Wrapper */
    .visual-wrapper {
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      @media (max-width: 991px) {
        height: 300px; /* Smaller on mobile */
        order: -1; /* Move to top on mobile */
      }
    }

    .scroll-hint {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--text-tertiary);
      font-size: 0.8rem;
      font-weight: 500;
      opacity: 0.6;
      transition: opacity 0.3s;
      
      &:hover { opacity: 1; color: var(--primary-color); }
      
      .arrow { animation: bounce 2s infinite; margin-top: 0.25rem; }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-5px); }
      60% { transform: translateY(-3px); }
    }
  `]
})
export class HeroComponent {
  hero = RESUME.hero;
}
