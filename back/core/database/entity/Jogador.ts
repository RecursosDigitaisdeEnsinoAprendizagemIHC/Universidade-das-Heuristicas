import { Fase } from './Fase';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToMany } from 'typeorm';

@Entity('jogador')
export class Jogador extends BaseEntity {

  @PrimaryGeneratedColumn()
  idJogador!: number;

  @Column({
    type: 'varchar',
    length: 3,
    nullable: false
  })
  nome!: string;

  @Column({
    type: "varchar",
    nullable: false
  })
  imagemPersonagem!: string;

  @Column({
    type: 'numeric',
    nullable: false
  })
  pontuacaoTotal!: number;

  @ManyToMany(type => Fase, fase => fase.jogadores)
  fases!: Fase[];
}