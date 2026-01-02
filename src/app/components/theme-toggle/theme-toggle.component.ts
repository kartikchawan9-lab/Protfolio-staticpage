import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button class="theme-btn" (click)="themeService.toggleTheme()" [attr.aria-label]="themeService.darkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
      <span class="icon" *ngIf="themeService.darkMode()">☀️</span>
      <span class="icon" *ngIf="!themeService.darkMode()">🌙</span>
    </button>
  `,
    styles: [`
    .theme-btn {
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      
      &:hover {
        background: var(--surface-hover);
        transform: rotate(15deg);
      }
    }
  `]
})
export class ThemeToggleComponent {
    themeService = inject(ThemeService);
}
