import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightOnCondition]',
})
export class HighlightOnConditionDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input() set highlightOnCondition(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'project-highlight');
    }
  }
}
