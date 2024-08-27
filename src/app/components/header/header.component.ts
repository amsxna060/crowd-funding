import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  brandName: string = 'Support Genious';
  navOptions: string[] = ['Explore', 'Start a Campaign', 'About', 'Contact'];
}
