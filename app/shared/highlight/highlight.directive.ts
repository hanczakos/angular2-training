import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[hoverHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {

    private el:HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    onMouseEnter() { this.highlight("yellow"); }
    onMouseLeave() { this.highlight(null); }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }

}