import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SpotlightDirective],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title" appScrollReveal>Featured <span>Projects</span></h2>
        
        <div class="projects-grid">
          <div class="project-card spotlight-card" *ngFor="let project of projects" appScrollReveal appSpotlight>
            <!-- Image Placeholder (Gradient since no images provided) -->
            <div class="project-cover">
               <div class="overlay"></div>
            </div>

            <div class="card-content">
              <div class="card-header">
                <span class="type" *ngIf="project.organization">{{ project.organization }}</span>
                <span class="type" *ngIf="!project.organization">{{ project.type }}</span>
                
                <h3 class="title">{{ project.name }}</h3>
              </div>
              
              <p class="desc">{{ project.description }}</p>
              
              <div class="meta-group">
                <div class="tech-stack" *ngIf="project.tech">
                  <span *ngFor="let tech of getTechArray(project.tech)" class="tech-pill">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }
    
    .project-card {
      /* Spotlight directive styling inherited */
      display: flex;
      flex-direction: column;
      min-height: 480px; 
      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      
      &:hover {
        transform: translateY(-8px);
        .project-cover .overlay { opacity: 0.6; }
      }
    }
    
    .project-cover {
      height: 200px;
      background: linear-gradient(135deg, var(--surface-hover), var(--bg-color));
      position: relative;
      overflow: hidden;
      
      /* Abstract geometric pattern */
      &::after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.3;
      }
      
      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, var(--bg-color), transparent);
        opacity: 0.8;
        transition: opacity 0.4s;
      }
    }
    
    .card-content {
      padding: 2rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .type {
      font-size: 0.8rem;
      color: var(--accent-color);
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      display: block;
    }
    
    .title {
      font-size: 1.5rem;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }
    
    .desc {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 2rem;
      flex-grow: 1;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tech-pill {
      font-size: 0.8rem;
      padding: 0.25rem 0.75rem;
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-tertiary);
      border: 1px solid var(--border-color);
    }
  `]
})
export class ProjectsComponent {
  projects = RESUME.projects;

  getTechArray(techString: string | undefined): string[] {
    if (!techString) return [];
    return techString.split(',').map(t => t.trim());
  }
}
