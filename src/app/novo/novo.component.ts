import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  name="";
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.name="clicou";
  }

}
