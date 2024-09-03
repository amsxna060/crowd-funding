import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  brandName: string = 'Support A Genious';
  navOptions: any[] = [
    { title: 'Home', link: '' },
    { title: 'Start a Campaign', link: 'campaign' },
    { title: 'How It Works', link: 'howitworks' },
  ];
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
