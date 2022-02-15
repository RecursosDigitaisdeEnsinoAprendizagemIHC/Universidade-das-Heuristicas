import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Fase } from './Fase';

@Entity('resposta_multipla_escolha')
export class RespostaMultiplaEscolha {

  @PrimaryGeneratedColumn()
  idRespostaMultiplaEscolha!: number;

  @Column({
    type: 'int',
    nullable: false
  })
  chaveResposta!: number;

  @Column({
    type: 'text',
    nullable: false
  })
  descricaoOpcao1!: string;

  @Column({
    type: 'text',
    nullable: false
  })
  descricaoOpcao2!: string;

  @Column({
    type: 'text',
    nullable: false
  })
  descricaoOpcao3!: string;

  @Column({
    type: 'text',
    nullable: false
  })
  descricaoOpcao4!: string;

  @Column({
    type: 'text',
    nullable: false
  })
  descricaoFeedback!: string;

}