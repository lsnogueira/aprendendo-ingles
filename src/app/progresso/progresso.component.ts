import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  _progresso: number;

  constructor() { }

  ngOnInit() {
  }

  @Input() public progresso: number = 0
  // @Input('x') set progresso1(value){
  //   this._progresso = value
  // }
  
  get progresso1() {
    return this._progresso
  }

}
