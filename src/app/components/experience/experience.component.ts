import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title" appScrollReveal>Professional <span>Experience</span></h2>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experience" appScrollReveal>
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <span class="date">{{ exp.duration }}</span>
              <h3 class="role">{{ exp.role }}</h3>
              <div class="company">{{ exp.company }} <span class="loc">• {{ exp.location }}</span></div>
              <ul class="responsibilities">
                <li *ngFor="let resp of exp.responsibilities">{{ resp }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding-left: 2rem;
      
      &::before {
        content: '';
        position: absolute;
        left: 7px;
        top: 2rem;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, var(--primary-color), transparent);
        opacity: 0.3;
      }
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 4rem;
      padding-left: 2.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .timeline-dot {
      position: absolute;
      left: 0;
      top: 2rem;
      width: 16px;
      height: 16px;
      background: var(--bg-color);
      border: 3px solid var(--primary-color);
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 10px var(--primary-color);
      transition: transform 0.3s ease;
    }
    
    .timeline-content {
      position: relative;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px) translateX(5px);
        border-color: var(--primary-color);
         box-shadow: var(--shadow-lg);
      }
    }
    
    .timeline-item:hover .timeline-dot {
      transform: scale(1.3);
      background: var(--primary-color);
    }
    
    .date {
      display: inline-block;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--primary-color);
      background: rgba(96, 165, 250, 0.1);
      padding: 0.35rem 0.85rem;
      border-radius: 99px;
      margin-bottom: 1.25rem;
      letter-spacing: 0.05em;
    }
    
    .role {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }
    
    .company {
      font-size: 1.15rem;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      font-weight: 500;
      
      .loc {
        font-size: 0.9rem;
        color: var(--text-tertiary);
      }
    }
    
    .responsibilities {
      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.85rem;
        color: var(--text-secondary);
        line-height: 1.6;
        
        &::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-size: 1.2em;
          line-height: 1;
        }
      }
    }
  `]
})
export class ExperienceComponent {
  experience = RESUME.experience;
}
