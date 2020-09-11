import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
    @Input()
    defaultColor: string = 'transparent';
    @Input('appBetterHighlight')
    highlightColor: string;
    @HostBinding('style.backgroundColor')
    backgroundColor: string;

    constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.renderer.setStyle(
        //     this.eleRef.nativeElement,
        //     'background-color',
        //     'yellow'
        // );
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter')
    mouseover(event: Event) {
        this.renderer.setStyle(
            this.eleRef.nativeElement,
            'background-color',
            this.highlightColor
        );

        // this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave')
    mouseleave(event: Event) {
        this.renderer.setStyle(
            this.eleRef.nativeElement,
            'background-color',
            this.defaultColor
        );
    }
}
