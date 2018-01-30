import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService {

  constructor() { }


  getCursos(){
    return ['JAva','C#','PHP'];
  }

}
