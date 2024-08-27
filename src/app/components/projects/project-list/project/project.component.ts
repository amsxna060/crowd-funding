import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  // "taking data from parent -parent to child- Project-list to Project"
  @Input()
  project: any;
  @Input()
  searchedProject: string = '';

  navigateToDetail() {
    console.log(this.project);
  }
}
