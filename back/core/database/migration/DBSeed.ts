import { RespostaVF } from './../entity/RespostaVF';
import { Pergunta } from './../entity/Pergunta';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Fase } from './../entity/Fase';


const respostasSeed: Partial<RespostaVF>[] = [
  {
    idRespostaVF: 0,
    dificuldadePergunta: 1,
    chaveResposta: 0, // TODO - ver sig chave resposta
    descricaoFeedback: 'Voce Errou por isso e isso'
  },
  {
    idRespostaVF: 1,
    dificuldadePergunta: 2,
    chaveResposta: 0, // TODO - ver sig chave resposta - 
    descricaoFeedback: 'Voce Errou por isso e isso'
  },
]


const perguntasFase1: Partial<Pergunta>[] = [
  {
    idPergunta: 0,
    titulo: 'Pergunta 1',
    descricao: 'Descrição da Pergunta 1',
    pontuacaoPergunta: 5,
    eMultiplaEscolha: false,
  },
  {
    idPergunta: 0,
    titulo: 'Pergunta 1',
    descricao: 'Descrição da Pergunta 1',
    pontuacaoPergunta: 5,
    eMultiplaEscolha: false,
  },
]

const fasesSeed: Partial<Fase>[] = [
  {
    idFase: 0,
    nome: 'Fase 1',
    descricao: 'Descrição da Fase 1',
    dificuldade: 1,
    minPontuacao: 0
  },
  {
    idFase: 1,
    nome: 'Fase 2',
    descricao: 'Descrição da Fase 2',
    dificuldade: 2,
    minPontuacao: 2
  },
];

export class UserSeed1556357483083
  implements MigrationInterface {
  public async up(_: QueryRunner): Promise<any> {

    const faseRepository = getRepository(Fase)
    const perguntaRepository = getRepository(Pergunta)
    const respostaRepository = getRepository(RespostaVF)

    const respostas = await respostaRepository.save(respostasSeed)
    perguntasFase1[0].respostaVF = respostas[0]
    perguntasFase1[1].respostaVF = respostas[1]

    const perguntas = await perguntaRepository.save(perguntasFase1)

    fasesSeed[0].perguntas = perguntas

    const fases = await faseRepository.save(fasesSeed)

    // for (const user of fasesSeed) {
    //   const newUser = userRepository.create({
    //     id: user.id,
    //     email: user.email,
    //     role: user.role
    //   })

    //   const randomString = 'f5a98081054a47e7bb0a5da007319d23';
    //   logger.log(`User - email: ${newUser.email} | password: ${randomString}`)
    //   newUser.setPassword(randomString)
    //   await userRepository.save(newUser);

    // }
  }

  public async down(_: QueryRunner): Promise<any> {
    // do nothing
  }
}