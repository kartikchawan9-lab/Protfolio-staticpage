import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-anime-char',
    standalone: true,
    template: `
    <div class="char-container" [class.floating]="float">
      <div class="glow-bg"></div>
      <img [src]="src" [alt]="alt" class="character-img" loading="lazy">
    </div>
  `,
    styles: [`
    .char-container {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .character-img {
      max-width: 100%;
      max-height: 600px;
      object-fit: contain;
      filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.3));
      mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
      transition: transform 0.3s ease;
      position: relative;
      z-index: 2;
    }

    .glow-bg {
      position: absolute;
      width: 60%;
      height: 60%;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%);
      filter: blur(40px);
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .floating .character-img {
      animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  `]
})
export class AnimeCharComponent {
    @Input() src = '';
    @Input() alt = 'Character';
    @Input() float = true;
}
