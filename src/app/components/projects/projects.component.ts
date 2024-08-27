import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  searchedText: string = '';
  setSearchText(value: any) {
    this.searchedText = value;
    console.log(this.searchedText);
  }
}
