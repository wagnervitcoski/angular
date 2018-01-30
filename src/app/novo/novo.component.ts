import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  name="";
  cursos: string[];
  constructor(private cursosService: ServicoService) {
    this.cursos=cursosService.getCursos();

   }

  ngOnInit() {
  }

  onClick(){
    this.name="clicou";
  }

}
