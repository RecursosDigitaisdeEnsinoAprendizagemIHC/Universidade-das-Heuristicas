import { Fase } from './Fase';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('jogador')
export class Jogador {

  @PrimaryGeneratedColumn()
  idJogador!: number;

  @Column({
    type: 'varchar',
    length: 3,
    nullable: false
  })
  nome!: string;

  @Column({
    type: "bytea",
    nullable: false
  })
  imagemPersonagem!: Buffer;

  @Column({
    type: 'numeric',
    nullable: false
  })
  pontuacaoTotal!: number;

  @OneToMany(type => Fase, fase => fase.jogador)
  fases!: Fase[];
}