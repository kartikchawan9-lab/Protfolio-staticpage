import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { AnimeCharComponent } from '../anime-char/anime-char.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SpotlightDirective, AnimeCharComponent],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title" appScrollReveal>Technical <span>Arsenal</span></h2>
        
        <!-- Marquee Effect for Quick View -->
        <div class="marquee-container" appScrollReveal>
             <div class="marquee-content">
               <span *ngFor="let item of allSkills">{{ item }} <span class="separator">•</span></span>
               <span *ngFor="let item of allSkills">{{ item }} <span class="separator">•</span></span>
             </div>
        </div>
        
        <div class="skills-layout">
          <!-- Anime Character (Left or Top) -->
          <div class="char-wrapper" appScrollReveal>
             <app-anime-char src="assets/images/skills-char.png" alt="Skills Hologram Interface" [float]="true"></app-anime-char>
          </div>

          <!-- Bento Grid Layout -->
          <div class="bento-grid">
            <div class="bento-card spotlight-card" 
                 *ngFor="let group of skills; let i = index" 
                 [class.wide]="i === 0 || i === 3"
                 appScrollReveal 
                 appSpotlight>
              
              <div class="card-inner">
                 <h3 class="category-title">{{ group.category }}</h3>
                 <div class="tags">
                   <span class="tag" *ngFor="let item of group.items">{{ item }}</span>
                 </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-layout {
      display: grid;
      gap: 3rem;
      
      @media (min-width: 1200px) {
        grid-template-columns: 0.8fr 1.2fr;
        align-items: start;
      }
    }

    .char-wrapper {
      display: flex;
      justify-content: center;
      position: sticky;
      top: 100px;
    }

    /* Marquee */
    .marquee-container {
      width: 100%;
      overflow: hidden;
      margin-bottom: 3rem;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
    
    .marquee-content {
      display: flex;
      gap: 2rem;
      width: max-content;
      animation: marquee 40s linear infinite;
      
      span {
        font-family: var(--font-mono);
        color: var(--text-secondary);
        font-size: 1.2rem;
        white-space: nowrap;
        text-transform: uppercase;
      }
      
      .separator {
        color: var(--primary-color);
        margin-left: 1rem;
      }
    }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* Bento Grid */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .bento-card {
      /* Spotlight directive handles borders/bg */
      min-height: 220px;
      padding: 2rem;
      transition: transform 0.3s;
      
      &:hover {
        transform: translateY(-5px);
      }
      
      &.wide {
        grid-column: 1 / -1;
      }
    }
    
    .category-title {
      font-size: 1.35rem;
      margin-bottom: 1.25rem;
      color: var(--text-primary);
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }
    
    .tag {
      padding: 0.4rem 0.9rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      color: var(--text-secondary);
      font-size: 0.85rem;
      transition: all 0.2s;
      
      &:hover {
        background: var(--surface-hover);
        color: var(--text-primary);
        border-color: var(--primary-color);
      }
    }
  `]
})
export class SkillsComponent {
  skills = RESUME.skills;

  // Flatten skills for Marquee
  get allSkills() {
    return this.skills.flatMap(s => s.items);
  }
}
