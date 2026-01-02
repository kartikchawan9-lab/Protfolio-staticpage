import { Directive, ElementRef, HostListener, Renderer2, signal } from '@angular/core';

@Directive({
    selector: '[appSpotlight]',
    standalone: true
})
export class SpotlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'spotlight-card');
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        this.el.nativeElement.style.setProperty('--mouse-x', `${x}px`);
        this.el.nativeElement.style.setProperty('--mouse-y', `${y}px`);
    }
}
