import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  // goToProjects: boolean;

  // @Output()
  // projectEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) {}
  // ngAfterViewChecked() {
  //   const carouselElement = document.querySelector('#homepageCarousel');
  //   if (carouselElement) {
  //     (carouselElement as any).addEventListener(
  //       'slide.bs.carousel',
  //       function () {
  //         console.log('Slide event triggered');
  //       }
  //     );
  //     (carouselElement as any).addEventListener(
  //       'slid.bs.carousel',
  //       function () {
  //         console.log('Slide transition completed');
  //       }
  //     );
  //   }
  //   if (carouselElement) {
  //     (carouselElement as any).addEventListener(
  //       'slide.bs.carousel',
  //       function () {
  //         // Customize the interval between slides (e.g., 3000ms = 3 seconds)
  //         (carouselElement as any).setAttribute('data-bs-interval', '200');
  //       }
  //     );
  //   }
  // }
  navigateToProjects() {
    // this.goToProjects = true;
    // this.projectEvent.emit(this.goToProjects);
    this.router.navigate(['/projects']);
  }
}
