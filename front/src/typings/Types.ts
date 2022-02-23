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
}