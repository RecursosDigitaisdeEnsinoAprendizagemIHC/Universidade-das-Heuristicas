import { RespostaMultiplaEscolha } from './RespostaMultiplaEscolha';
import { RespostaVF } from './RespostaVF';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, BaseEntity } from 'typeorm';
import { Fase } from './Fase';

@Entity('pergunta')
export class Pergunta extends BaseEntity {

  @PrimaryGeneratedColumn()
  idPergunta!: number;

  @Column({
    type: 'text',
    nullable: false
  })
  titulo!: string;

  @Column({
    type: 'text',
    nullable: true
  })
  descricao!: string;

  @Column({
    type: 'int',
    nullable: false
  })
  pontuacaoPergunta!: number;

  @Column({
    type: "bytea",
    nullable: true
  })
  imagem?: Buffer;

  @Column({
    type: "boolean",
    nullable: false
  })
  eMultiplaEscolha!: boolean;

  @ManyToOne(type => Fase, fase => fase.perguntas)
  @JoinColumn()
  fase!: Fase;

  @OneToOne(() => RespostaVF, { eager: true })
  @JoinColumn()
  respostaVF!: RespostaVF;

  @OneToOne(() => RespostaMultiplaEscolha, { eager: true })
  @JoinColumn()
  respostaMultiplaEscolha!: RespostaMultiplaEscolha;

}