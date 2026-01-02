import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimeCharComponent } from '../anime-char/anime-char.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, AnimeCharComponent],
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title" appScrollReveal>About <span>Me</span></h2>
        
        <div class="about-grid">
           <!-- Character Image -->
           <div class="char-wrapper" appScrollReveal>
              <app-anime-char src="assets/images/about-char.png" alt="Coding Anime Character" [float]="false"></app-anime-char>
           </div>

           <!-- Content -->
          <div class="about-content glass-card" appScrollReveal>
            <div class="text">
              <p class="lead">{{ hero.summary }}</p>
              <p>
                I am a dedicated Software Engineer with <strong>3+ years</strong> of hands-on experience within the Microsoft ecosystem.
                My expertise lies in building robust backend solutions using .NET technologies, optimizing Azure cloud services,
                and ensuring high-performance production environments. I have a proven track record of migrating legacy WCF systems
                to modern .NET Core architectures and integrating advanced AI services like Azure Face API.
              </p>
            </div>
            <div class="stats">
              <div class="stat-item">
                <span class="number">3+</span>
                <span class="label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="number">2</span>
                <span class="label">Key Companies</span>
              </div>
              <div class="stat-item">
                <span class="number">5+</span>
                <span class="label">Major Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      gap: 3rem;
      align-items: center;
      
      @media (min-width: 992px) {
        grid-template-columns: 1fr 1.5fr;
      }
    }

    .char-wrapper {
        display: flex;
        justify-content: center;
        height: 100%;
        max-height: 500px;
    }

    .about-content {
      padding: 3rem;
    }
    
    .lead {
      font-size: 1.35rem;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
      font-weight: 500;
      line-height: 1.6;
    }
    
    .text p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }
    
    strong {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .stats {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      margin-top: 2rem;
      
      .stat-item {
        background: rgba(255, 255, 255, 0.03);
        padding: 1.5rem;
        border-radius: 1rem;
        border: 1px solid var(--border-color);
        text-align: center;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary-color);
        }
      }
      
      .number {
        display: block;
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary-color);
        line-height: 1;
        margin-bottom: 0.5rem;
      }
      
      .label {
        font-size: 0.8rem;
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
      }
    }
  `]
})
export class AboutComponent {
  hero = RESUME.hero;
}
