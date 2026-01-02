import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
           <div class="edu-card glass-card" *ngFor="let edu of education">
             <div class="year">{{ edu.year }}</div>
             <h3 class="degree">{{ edu.degree }}</h3>
             <div class="school">{{ edu.school }}</div>
           </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .education-grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      max-width: 900px;
      margin: 0 auto;
    }
    
    .edu-card {
      text-align: center;
      padding: 2.5rem;
      border: 1px solid var(--border-color);
      transition: all 0.3s;
      
      &:hover {
        border-color: var(--primary-color);
        transform: translateY(-5px);
        background: var(--surface-hover);
      }
    }
    
    .year {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 99px;
      background: rgba(59, 130, 246, 0.1);
      color: var(--primary-color);
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    
    .degree {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-primary);
    }
    
    .school {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
  `]
})
export class EducationComponent {
    education = RESUME.education;
}
