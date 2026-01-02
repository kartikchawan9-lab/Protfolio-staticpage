import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    darkMode = signal<boolean>(true);

    constructor() {
        // Sync with localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.darkMode.set(savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.darkMode.set(prefersDark);
        }

        // Effect to apply class
        effect(() => {
            if (this.darkMode()) {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    toggleTheme() {
        this.darkMode.update(d => !d);
    }
}
