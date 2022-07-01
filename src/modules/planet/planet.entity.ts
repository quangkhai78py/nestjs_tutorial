import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'planet' })
export class Planet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'token_id',
    type: 'varchar',
    unique: true,
  })
  token_id?: string;

  @Column({
    name: 'user_id',
    type: 'bigint',
  })
  user_id?: number;

  @Column({
    name: 'rarity',
    type: 'int',
  })
  rarity: number;

  @Column({
    name: 'planet_definition',
    type: 'bigint',
  })
  planet_definition: number;

  @Column({
    name: 'ability_id_1',
    type: 'bigint',
  })
  ability_id_1: number;

  @Column({
    name: 'ability_id_2',
    type: 'bigint',
  })
  ability_id_2: number;

  @Column({
    name: 'ability_id_3',
    type: 'bigint',
  })
  ability_id_3: number;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'status',
    type: 'tinyint',
  })
  status: number;

  @Column({
    name: 'current_exp',
    type: 'int',
  })
  current_exp: number;

  @Column({
    name: 'current_energy',
    type: 'int',
  })
  current_energy: number;

  @Column({
    name: 'last_time_update_energy',
    type: 'datetime',
  })
  last_time_update_energy?: Date;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at?: Date;
}
