import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrl: './demo-child.component.css',
})
export class DemoChildComponent implements OnChanges {
  @Input()
  name: string;
  age: number = 25;
  @Input()
  isMarried: boolean;

  @ContentChild('mygreeting')
  myGreeting: any;

  @ViewChild('myname')
  myName: any;

  constructor() {
    console.log('constructor called');
    // console.log(this.name);
    // console.log(this.age);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    // console.log(this.name);
    // console.log(this.age);
    // for (let propName in changes) {
    //   let change = changes[propName];
    //   console.log(
    //     `${propName}: currentValue = ${change.currentValue}, previousValue = ${change.previousValue}`
    //   );
    // }
  }

  ngOnInit() {
    console.log('ngOnInit called');
    // console.log(this.name);
    // console.log(this.age);
    // console.log(this.myGreeting);
    // console.log(this.myName);
  }
  ngDoCheck() {
    // console.log('ngDoCheck called');
    // console.log(this.myGreeting);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    // console.log(this.myGreeting.nativeElement.innerText);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    // console.log(this.myName);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
