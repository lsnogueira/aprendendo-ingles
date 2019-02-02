import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatProgressBarModule }  from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
