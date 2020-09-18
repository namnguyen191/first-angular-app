import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  firstName = 'Nam';
  lastName = 'Nguyen';
  middleName = 'Vu Hoang';
  dob = new Date('1998-01-20');
  msg = 'This is my custom pipe message!';
  filteredName = '';
  names = [
    'John Doe',
    'Nazim Hebert',
    'Vivian Rice',
    'Cian Thomson',
    'Cali Yang',
    'Maddison Johnston',
    'Jayne Schroeder',
    'Macsen Arroyo',
    'Harvie Reyna',
    'Aviana Stephens',
    'Taybah Barrow',
  ];

  fetchNames = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Fetch Name 1', 'Fetch Name 2']);
    }, 2000);
  });

  constructor() {}

  ngOnInit(): void {}
}
