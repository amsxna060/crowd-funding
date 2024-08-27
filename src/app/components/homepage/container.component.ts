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
  navigateToProjects() {
    // this.goToProjects = true;
    // this.projectEvent.emit(this.goToProjects);
    this.router.navigate(['/projects']);
  }
}
