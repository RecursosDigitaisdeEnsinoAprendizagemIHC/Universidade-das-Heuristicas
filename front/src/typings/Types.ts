export interface JogadorInterface {
  idJogador: number
  nome: string
  pontuacaoTotal: number
  questoesCertas: number
  questoesTentadas: number
  imagemPersonagem: string
}

export interface FasesInterface {
  idFase: number
  nome: string
  descricao: string
  dificuldade: number
  minPontuacao: number
  perguntas: PerguntaInterface[]
}

export interface PerguntaInterface {
  idPergunta: number
  titulo: string
  descricao: string
  pontuacaoPergunta: number
  imagem?: Buffer
  eMultiplaEscolha: boolean
  fase: FasesInterface
  respostaVF: RespostaVFInterface
  respostaMultiplaEscolha: RespostaMultiplaEscolhaInferface
}

export interface RespostaVFInterface {

}

export interface RespostaMultiplaEscolhaInferface {

}