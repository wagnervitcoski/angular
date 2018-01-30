import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NovoComponent } from './novo/novo.component';
import {FormsModule} from '@angular/forms';
import { ServicoService } from './servico.service';


@NgModule({
  declarations: [
    AppComponent,
    NovoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
