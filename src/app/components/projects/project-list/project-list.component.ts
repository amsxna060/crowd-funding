import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  @Input()
  searchedProject: string = '';
  projects = [
    {
      title: 'Eco-Friendly Water Bottle',
      description:
        'A reusable water bottle made from 100% recycled materials. Perfect for reducing plastic waste.',
      fundingGoal: 50000,
      currentFunding: 35000,
      backers: 120,
      imageUrl: 'https://picsum.photos/id/13/300/200',
    },
    {
      title: 'Solar-Powered Backpack',
      description:
        'A backpack that charges your devices using solar power. Ideal for travelers and outdoor enthusiasts.',
      fundingGoal: 75000,
      currentFunding: 42000,
      backers: 200,
      imageUrl: 'https://picsum.photos/id/12/300/200',
    },
    {
      title: 'Smart Home Garden',
      description:
        'A smart indoor garden that helps you grow fresh herbs and vegetables with minimal effort.',
      fundingGoal: 100000,
      currentFunding: 80000,
      backers: 300,
      imageUrl: 'https://picsum.photos/id/35/300/200',
    },
    {
      title: 'Portable Coffee Maker',
      description:
        'A compact coffee maker that you can take anywhere. Perfect for coffee lovers on the go.',
      fundingGoal: 25000,
      currentFunding: 15000,
      backers: 80,
      imageUrl: 'https://picsum.photos/id/32/300/200',
    },
    {
      title: 'Foldable Electric Scooter',
      description:
        'An eco-friendly scooter that folds up for easy transport and storage. Great for urban commuting.',
      fundingGoal: 150000,
      currentFunding: 120000,
      backers: 450,
      imageUrl: 'https://picsum.photos/id/51/300/200',
    },
    {
      title: 'Wearable Fitness Tracker',
      description:
        'A stylish fitness tracker that monitors your health and activity levels throughout the day.',
      fundingGoal: 50000,
      currentFunding: 30000,
      backers: 180,
      imageUrl: 'https://picsum.photos/id/56/300/200',
    },
    {
      title: 'Noise-Canceling Headphones',
      description:
        'High-quality headphones with advanced noise-canceling technology. Perfect for focus and relaxation.',
      fundingGoal: 80000,
      currentFunding: 60000,
      backers: 220,
      imageUrl: 'https://picsum.photos/id/27/300/200',
    },
    {
      title: 'Smart Mirror',
      description:
        'A mirror that displays the weather, time, and other important information. Great for smart homes.',
      fundingGoal: 120000,
      currentFunding: 90000,
      backers: 320,
      imageUrl: 'https://picsum.photos/id/78/300/200',
    },
    {
      title: 'Electric Longboard',
      description:
        'A powerful longboard with electric motors for a smooth and fast ride. Ideal for urban exploration.',
      fundingGoal: 200000,
      currentFunding: 150000,
      backers: 500,
      imageUrl: 'https://picsum.photos/id/95/300/200',
    },
    {
      title: 'Wireless Charging Pad',
      description:
        'A sleek and efficient wireless charging pad for all your devices. Great for reducing cable clutter.',
      fundingGoal: 30000,
      currentFunding: 22000,
      backers: 140,
      imageUrl: 'https://picsum.photos/id/10/300/200',
    },
    {
      title: 'Smart Thermostat',
      description:
        'An advanced thermostat that learns your preferences and optimizes energy usage for your home.',
      fundingGoal: 120000,
      currentFunding: 100000,
      backers: 350,
      imageUrl: 'https://picsum.photos/id/11/300/200',
    },
    {
      title: 'Portable Solar Charger',
      description:
        'A compact solar charger that provides clean energy for your devices on the go.',
      fundingGoal: 40000,
      currentFunding: 28000,
      backers: 180,
      imageUrl: 'https://picsum.photos/id/12/300/200',
    },
    {
      title: 'Ergonomic Office Chair',
      description:
        'A chair designed for maximum comfort and support during long hours of work.',
      fundingGoal: 60000,
      currentFunding: 50000,
      backers: 250,
      imageUrl: 'https://picsum.photos/id/13/300/200',
    },
    {
      title: 'Home Security Camera',
      description:
        'A high-definition security camera with night vision and cloud storage for peace of mind.',
      fundingGoal: 90000,
      currentFunding: 75000,
      backers: 320,
      imageUrl: 'https://picsum.photos/id/14/300/200',
    },
    {
      title: 'Eco-Friendly Toothbrush',
      description:
        'A toothbrush made from sustainable materials, designed to reduce plastic waste.',
      fundingGoal: 20000,
      currentFunding: 15000,
      backers: 100,
      imageUrl: 'https://picsum.photos/id/15/300/200',
    },
    {
      title: 'Portable Air Purifier',
      description:
        'A compact air purifier that you can take anywhere, ensuring clean air wherever you go.',
      fundingGoal: 75000,
      currentFunding: 60000,
      backers: 280,
      imageUrl: 'https://picsum.photos/id/16/300/200',
    },
    {
      title: 'Smart Light Bulbs',
      description:
        'Energy-efficient light bulbs that you can control with your smartphone or voice.',
      fundingGoal: 50000,
      currentFunding: 40000,
      backers: 210,
      imageUrl: 'https://picsum.photos/id/17/300/200',
    },
    {
      title: 'Virtual Reality Headset',
      description:
        'A cutting-edge VR headset that offers immersive experiences in gaming and entertainment.',
      fundingGoal: 150000,
      currentFunding: 130000,
      backers: 520,
      imageUrl: 'https://picsum.photos/id/18/300/200',
    },
    {
      title: 'Wireless Earbuds',
      description:
        'Compact and comfortable wireless earbuds with high-quality sound and long battery life.',
      fundingGoal: 80000,
      currentFunding: 70000,
      backers: 320,
      imageUrl: 'https://picsum.photos/id/19/300/200',
    },
    {
      title: 'Foldable Drone',
      description:
        'A portable drone with high-definition camera and advanced flight controls, perfect for aerial photography.',
      fundingGoal: 200000,
      currentFunding: 170000,
      backers: 600,
      imageUrl: 'https://picsum.photos/id/20/300/200',
    },
    {
      title: 'Smart Pet Feeder',
      description:
        "An automated pet feeder that ensures your pet is fed on time, even when you're not home.",
      fundingGoal: 40000,
      currentFunding: 35000,
      backers: 180,
      imageUrl: 'https://picsum.photos/id/21/300/200',
    },
    {
      title: 'Eco-Friendly Phone Case',
      description:
        'A biodegradable phone case made from plant-based materials, designed to protect your device and the environment.',
      fundingGoal: 25000,
      currentFunding: 20000,
      backers: 130,
      imageUrl: 'https://picsum.photos/id/22/300/200',
    },
    {
      title: 'Smart Door Lock',
      description:
        'A secure door lock that can be controlled remotely via smartphone, offering convenience and security.',
      fundingGoal: 70000,
      currentFunding: 60000,
      backers: 290,
      imageUrl: 'https://picsum.photos/id/23/300/200',
    },
    {
      title: 'Portable Bluetooth Speaker',
      description:
        'A waterproof Bluetooth speaker with powerful sound, perfect for outdoor adventures.',
      fundingGoal: 50000,
      currentFunding: 45000,
      backers: 250,
      imageUrl: 'https://picsum.photos/id/24/300/200',
    },
    {
      title: 'Smart Water Bottle',
      description:
        'A water bottle that tracks your hydration levels and reminds you to drink water.',
      fundingGoal: 30000,
      currentFunding: 25000,
      backers: 150,
      imageUrl: 'https://picsum.photos/id/25/300/200',
    },
    {
      title: 'Wearable Health Monitor',
      description:
        'A wearable device that tracks vital signs and provides real-time health insights.',
      fundingGoal: 120000,
      currentFunding: 100000,
      backers: 380,
      imageUrl: 'https://picsum.photos/id/26/300/200',
    },
    {
      title: 'Solar Lantern',
      description:
        'A solar-powered lantern that provides bright, sustainable light for camping and emergencies.',
      fundingGoal: 40000,
      currentFunding: 35000,
      backers: 190,
      imageUrl: 'https://picsum.photos/id/27/300/200',
    },
  ];
}
