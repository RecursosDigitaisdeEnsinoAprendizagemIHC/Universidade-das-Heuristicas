import { Jogador } from './Jogador';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
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
    nullable: true
  })
  imagem?: Buffer;

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

  @ManyToMany(type => Jogador, jogador => jogador.fases)
  @JoinTable()
  jogadores!: Jogador;

  @OneToMany(type => Pergunta, pergunta => pergunta.fase)
  perguntas!: Pergunta[];
}