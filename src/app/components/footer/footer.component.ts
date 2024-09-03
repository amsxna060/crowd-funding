import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  aboutText = `Supportagenious.com is a crowdfunding platform that aims to impact the lives of over 2 billion people in India and other geographies. We operate in the donation and rewards space and are building a marketplace for Ideas and Causes that will dramatically alter how we fund what is important to all of us.

Come join us on this journey.`;

  footerLinks = [
    { title: 'About us', url: '#' },
    { title: 'Our people', url: '#' },
    { title: 'Work with us', url: '#' },
    { title: 'Pricing and charges', url: '#' },
    { title: 'Contact us', url: '#' },
    { title: 'Find us', url: '#' },
    { title: 'Our partners', url: '#' },
    { title: 'Blog', url: '#' },
    { title: 'Press', url: '#' },
    { title: 'Start your campaign', url: '#' },
    { title: 'How it works', url: '#' },
    { title: 'Terms and conditions', url: '#' },
    { title: 'Privacy policy', url: '#' },
    { title: 'Campaign owner agreement', url: '#' },
    { title: 'Crowd favourites', url: '#' },
  ];

  socialLinks = [
    { icon: 'fa-facebook-square', url: 'https://www.facebook.com/' },
    { icon: 'fa-twitter-square', url: 'https://twitter.com/' },
    { icon: 'fa-linkedin-square', url: 'https://www.linkedin.com/' },
    { icon: 'fa-youtube-square', url: 'https://www.youtube.com/' },
  ];
}
