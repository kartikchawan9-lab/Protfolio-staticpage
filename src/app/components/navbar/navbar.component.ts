import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, ThemeToggleComponent],
    template: `
    <nav class="navbar">
      <div class="container navbar-content">
        <a href="#" class="logo">SC.</a>
        <div class="links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="mobile-actions">
           <app-theme-toggle></app-theme-toggle>
        </div>
      </div>
    </nav>
  `,
    styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--glass-border);
      padding: 1rem 0;
      transition: background 0.3s ease;
    }
    
    .navbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--text-primary);
      
      span {
        color: var(--primary-color);
      }
    }
    
    .links {
      display: none;
      gap: 2rem;
      
      @media (min-width: 768px) {
        display: flex;
      }
      
      a {
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--text-secondary);
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        &:hover {
          color: var(--text-primary);
          &::after {
            width: 100%;
          }
        }
      }
    }
    
    .mobile-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  `]
})
export class NavbarComponent { }
