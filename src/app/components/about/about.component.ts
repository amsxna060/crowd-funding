import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  name: string = '';
  namedata: string = 'Hello';
  isMarried: boolean;
  constructor() {
    console.log('About Component Loaded');
  }
  replaceData() {
    this.namedata = this.name;
    this.isMarried = !this.isMarried;
  }
}
