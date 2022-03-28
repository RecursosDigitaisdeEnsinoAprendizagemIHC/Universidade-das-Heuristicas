import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Fase } from './Fase';

@Entity('resposta_v_f')
export class RespostaVF extends BaseEntity {

  @PrimaryGeneratedColumn()
  idRespostaVF!: number;

  @Column({
    type: 'int',
    nullable: false
  })
  chaveResposta!: number;

  @Column({
    type: 'text',
    nullable: false
  })
  descricaoFeedback!: string;


}