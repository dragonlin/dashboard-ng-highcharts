import { Component, OnInit, NgZone } from '@angular/core';
import { Circle } from './circle';
import { Container } from './types';


@Component({
  selector: 'app-coop',
  templateUrl: './coop.component.html',
  styleUrls: ['./coop.component.less']
})
export class CoopComponent implements OnInit {
  clicked: boolean;
  circles: Circle[] = [];
  container: Container = { w: 800, h: 600 };

  constructor(private ngZone: NgZone) { 
    this.clicked = false;
  }

  ngOnInit() {
    this.clicked = true;
    this.initCircle()
    setInterval(() => {
      this.initCircle()
    }, 1000);
  }

  addCircle() {
    if(this.clicked){
      console.log('it has been trigger. ')
      return;
    }
    // this.ngZone.runOutsideAngular(() => !this.clicked && this.animate());
    // requestAnimationFrame(this.initCircle.bind(this))
  }

  animate() {
    // requestAnimationFrame(this.initCircle.bind(this));  
  }

  initCircle(){
    console.log('-----' + new Date().toLocaleString())
    this.circles = [];
    const r = 10;
    const arr = [
      // [250, 300, 300],
    // [r, 50, 300],
    [r, 550, 300],
    // [r, 300 + 250*Math.sin(15/180*Math.PI), 300 -250*Math.cos(15/180*Math.PI)],
    // [r, 300 + 250*Math.sin(30/180*Math.PI), 300 -250*Math.cos(30/180*Math.PI)],
    [r, 300 + 250*Math.sin(45/180*Math.PI) + 200, 300 -250*Math.cos(45/180*Math.PI)],
    [r, 300 + 250*Math.sin(60/180*Math.PI) + 200, 300 -250*Math.cos(60/180*Math.PI)],
    [r, 300 + 250*Math.sin(75/180*Math.PI) + 200, 300 -250*Math.cos(75/180*Math.PI)],
    [r, 300 + 250*Math.sin(90/180*Math.PI) + 200, 300 -250*Math.cos(90/180*Math.PI)],
    [r, 300 + 250*Math.sin(105/180*Math.PI) + 200, 300 -250*Math.cos(105/180*Math.PI)],
    [r, 300 + 250*Math.sin(120/180*Math.PI) + 200, 300 -250*Math.cos(120/180*Math.PI)],
    [r, 300 + 250*Math.sin(135/180*Math.PI) + 200, 300 -250*Math.cos(135/180*Math.PI)],
    // [r, 300 + 250*Math.sin(150/180*Math.PI), 300 -250*Math.cos(150/180*Math.PI)],
    // [r, 300 + 250*Math.sin(165/180*Math.PI), 300 -250*Math.cos(165/180*Math.PI)],
    // [r, 300, 300 -250],
    // [r, 300 - 250*Math.sin(15/180*Math.PI), 300 -250*Math.cos(15/180*Math.PI)],
    // [r, 300 - 250*Math.sin(30/180*Math.PI), 300 -250*Math.cos(30/180*Math.PI)],
    [r, 300 - 250*Math.sin(45/180*Math.PI), 300 -250*Math.cos(45/180*Math.PI)],
    [r, 300 - 250*Math.sin(60/180*Math.PI), 300 -250*Math.cos(60/180*Math.PI)],
    [r, 300 - 250*Math.sin(75/180*Math.PI), 300 -250*Math.cos(75/180*Math.PI)],
    [r, 300 - 250*Math.sin(90/180*Math.PI), 300 -250*Math.cos(90/180*Math.PI)],
    [r, 300 - 250*Math.sin(105/180*Math.PI), 300 -250*Math.cos(105/180*Math.PI)],
    [r, 300 - 250*Math.sin(120/180*Math.PI), 300 -250*Math.cos(120/180*Math.PI)],
    [r, 300 - 250*Math.sin(135/180*Math.PI), 300 -250*Math.cos(135/180*Math.PI)],
    // [r, 300 - 250*Math.sin(150/180*Math.PI), 300 -250*Math.cos(150/180*Math.PI)],
    // [r, 300 - 250*Math.sin(165/180*Math.PI), 300 -250*Math.cos(165/180*Math.PI)],
    // [r, 300,550],
  ];

    arr.forEach(element => {
      const [_radius, _x, _y ] = element;
      const newCircle: Circle = new Circle(this.container);
      newCircle.overrideRadius(_radius);
      newCircle.overridePoint(_x,_y);
      this.circles.push(newCircle);
    });

    // requestAnimationFrame(this.initCircle.bind(this))
  }

}
