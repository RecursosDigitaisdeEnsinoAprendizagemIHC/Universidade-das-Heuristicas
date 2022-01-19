import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('base')
export class Base {

  @PrimaryGeneratedColumn()
  idCliente!: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true
  })
  codCliMigracao?: string;

  // TODO - FK
  @Column({
    type: 'varchar',
    length: 2
  })
  idTipoCliente!: string;

  // TODO - FK
  @Column({
    type: 'varchar',
    length: 4
  })
  idTipoDocumento!: string;

  @Column({
    type: 'varchar',
    length: 14
  })
  numDocCliente!: string;

  // TODO - FK
  @Column({
    type: 'varchar',
    length: 2,
    nullable: true
  })
  idSitRecFederal?: string;

  @Column({
    type: 'varchar',
    length: 50
  })
  nomeCliente!: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true
  })
  sexo?: string;

  @Column({
    type: 'varchar',
    length: 20
  })
  rg!: string;

  @Column({
    type: 'varchar',
    length: 1,
    nullable: true
  })
  staRgEstrangeiro?: string;

  // TODO - FK
  @Column({
    type: 'varchar',
    length: 2,
    nullable: true
  })
  ufRg?: string;

  // TODO - FK
  @Column({
    type: 'varchar',
    length: 3,
    nullable: true
  })
  idOrgaoExpRg?: string;

  @Column({ type: 'date' })
  dtaNascimento!: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true
  })
  telefone?: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true
  })
  celular?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true
  })
  email?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true
  })
  nomePai?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true
  })
  nomeMae?: string;


  @Column({
    type: 'datetime'
  })
  dtaInclusao!: Date;

  // TODO - FK
  @Column({
    type: 'int',
  })
  idUsuInclusao!: number;

  // TODO - FK
  @Column({
    type: 'varchar',
    length: 2,
    nullable: true
  })
  idTipoInscricao?: string;


  @Column({
    type: 'varchar',
    length: 20,
    nullable: true
  })
  numInscricao?: string;
}
