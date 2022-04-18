import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lever',
  templateUrl: './lever.component.html',
  styleUrls: ['./lever.component.css']
})
export class LeverComponent implements OnInit {

  @Output() stateChanged = new EventEmitter;
  state = 'up'

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    if (this.state == 'up') {
      this.state = 'down'
    } else {
      this.state = 'up'
    }
    this.stateChanged.emit(this.state);
  }

  getImage():String {
    if (this.state == 'up') {
      return "assets/lever_up.png"
    } else {
      return "assets/lever_down.png"
    }
  }

}
