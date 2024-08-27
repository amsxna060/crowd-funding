import { Component, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  brandName: string = 'Support Genious';
  navOptions: any[] = [
    { title: 'Explore', link: '/projects' },
    { title: 'Start a Campaign', link: '/campaign' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
  ];
}
