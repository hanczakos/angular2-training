import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[hoverHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {

    private _defaultColor = '#5BC0DE';
    @Input('hoverHighlight') highlightColor: string;

    private el:HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this.highlight(null); }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }

}