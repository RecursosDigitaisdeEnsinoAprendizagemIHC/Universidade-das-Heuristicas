import { Jogador } from './Jogador';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pergunta } from './Pergunta';

@Entity('fase')
export class Fase {

  @PrimaryGeneratedColumn()
  idFase!: number;

  @Column({
    type: 'text',
    nullable: false
  })
  nome!: string;


  @Column({
    type: 'text',
    nullable: false
  })
  descricao!: string;

  @Column({
    type: "bytea",
    nullable: false
  })
  imagem!: Buffer;

  @Column({
    type: 'int',
    nullable: false
  })
  minPontuacao!: number;

  @Column({
    type: 'int',
    nullable: false
  })
  dificuldade!: number;

  @ManyToOne(type => Jogador, jogador => jogador.fases)
  @JoinColumn()
  jogador!: Jogador;

  @OneToMany(type => Pergunta, pergunta => pergunta.fase)
  perguntas!: Pergunta[];
}