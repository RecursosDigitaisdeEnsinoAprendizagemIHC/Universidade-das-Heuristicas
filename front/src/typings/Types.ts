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
  idRespostaVF: number
  dificuldadePergunta: number
  chaveResposta: number
  descricaoFeedback: string
}

export interface RespostaMultiplaEscolhaInferface {
  idRespostaMultiplaEscolha: number
  chaveResposta: number
  descricaoOpcao1: string
  descricaoOpcao2: string
  descricaoOpcao3: string
  descricaoOpcao4: string
  descricaoFeedback: string
}


export interface FeedBackInterface {
  color: 'text-green-500' | 'text-red-700'
  title: string
  description: string
}