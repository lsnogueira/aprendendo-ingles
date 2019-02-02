import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from 'src/shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza esta frase:'
  public resposta: string //= ''
  public rodadaFrase: Frase
  public rodada: number = 0
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter

  constructor() {
    this.atualizarRodada()
  }

  ngOnInit() {

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta() {

    //verificando se a palavra esta correta
    if (this.resposta == this.rodadaFrase.frasePtBr) {
      //alterando a rodada
      this.rodada++

      //tornando o valor da barra dinamico diacordo com o nº de palavras
      this.progresso += 100 / this.frases.length
      
      //verificando se o jogador já ganhou o jogo
      if(this.rodada === 6){
        this.encerrarJogo.emit('vitoria')
      }

      //atualizando rodada
      this.atualizarRodada()
    }
    //fluxo caso palavra esteja errada
    else {
      //reduzindo a tentativa
      this.tentativas--
      
      //verificando se o jogador ja perdeu o jogo
      if(this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')        
      }
    }
  }

  public atualizarRodada(): void {
    //atribuindo a nova frase para o jogo
    this.rodadaFrase = this.frases[this.rodada]
    //limpando a entrada do usuario
    this.resposta =  ''
  }
}
