import { Directive, ElementRef, inject, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
    private el = inject(ElementRef);
    private observer: IntersectionObserver | undefined;

    ngAfterViewInit() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        this.observer?.unobserve(entry.target); // Trigger once
                    }
                });
            },
            {
                threshold: 0.15, // Trigger when 15% visible
                rootMargin: '0px 0px -50px 0px' // Offset slightly
            }
        );

        // Add initial class to hide
        this.el.nativeElement.classList.add('reveal-hidden');
        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
