import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less']
})
export class ToolsComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
