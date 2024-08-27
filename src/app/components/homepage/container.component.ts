import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  goToProjects: boolean;

  @Output()
  projectEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  navigateToProjects() {
    this.goToProjects = true;
    this.projectEvent.emit(this.goToProjects);
  }
}
