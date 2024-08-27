import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Directive({
  selector: '[myStyle]',
})
export class MyStyleDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // it is not good practice to directly modify dom
    // this.element.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#f2f2f2'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', '#000');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      '#1a72d1'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      '#f2f2f2'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', '#000');
  }
}
