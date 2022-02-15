import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Fase } from './Fase';

@Entity('resposta_v_f')
export class RespostaVF {

  @PrimaryGeneratedColumn()
  idRespostaVF!: number;

  @Column({
    type: 'int',
    nullable: false
  })
  dificuldadePergunta!: number;

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
  descricaoFeedback!: string;


}