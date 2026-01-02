import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimeCharComponent } from '../anime-char/anime-char.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, AnimeCharComponent],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title" appScrollReveal>Get In <span>Touch</span></h2>
        
        <div class="contact-grid">
           <!-- Character -->
           <div class="char-wrapper" appScrollReveal>
             <app-anime-char src="assets/images/contact-char.png" alt="Contact Anime Character"></app-anime-char>
           </div>

           <!-- Content -->
          <div class="contact-content glass-card" appScrollReveal>
            <div class="contact-info">
               <div class="info-item">
                 <span class="label">Email</span>
                 <a [href]="'mailto:' + hero.email" class="value">{{ hero.email }}</a>
               </div>
               <div class="info-item">
                 <span class="label">Phone</span>
                 <a [href]="'tel:' + hero.phone" class="value">{{ hero.phone }}</a>
               </div>
               <div class="info-item">
                 <span class="label">Location</span>
                 <span class="value">{{ hero.location }}</span>
               </div>
            </div>
            
            <div class="cta-message">
              <p>I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              <a [href]="'mailto:' + hero.email" class="btn btn-primary">Say Hello</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-grid {
      display: grid;
      gap: 3rem;
      align-items: center;

      @media (min-width: 992px) {
        grid-template-columns: 0.8fr 1.2fr;
      }
    }

    .char-wrapper {
        display: flex;
        justify-content: center;
        max-height: 450px;
    }

    .contact-content {
      display: grid;
      gap: 3rem;
      padding: 3rem;
      
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .info-item {
      margin-bottom: 2.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .label {
      display: block;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }
    
    .value {
      font-size: 1.25rem;
      color: var(--text-primary);
      font-weight: 500;
      word-break: break-all;
      
      &[href]:hover {
        color: var(--primary-color);
      }
    }
    
    .cta-message {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid var(--border-color);
      padding-top: 2rem;
       @media (min-width: 768px) {
        border-top: none;
        border-left: 1px solid var(--border-color);
        padding-top: 0;
        padding-left: 3rem;
      }
      
      p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }
  `]
})
export class ContactComponent {
  hero = RESUME.hero;
}
