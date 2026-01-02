import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Shambuling Chawan. All rights reserved.</p>
        <p class="built-with">Designed & Built with Angular 19</p>
      </div>
    </footer>
  `,
    styles: [`
    .footer {
      padding: 3rem 0;
      background: var(--surface-color);
      border-top: 1px solid var(--border-color);
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    
    .built-with {
      font-size: 0.8rem;
      margin-top: 0.5rem;
      opacity: 0.7;
    }
  `]
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
}
