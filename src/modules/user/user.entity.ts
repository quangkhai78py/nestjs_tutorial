import {
  BaseEntity,
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'email',
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    name: 'avatar',
    type: 'varchar',
    unique: true,
  })
  avatar?: string;

  @Column({
    name: 'gum',
    type: 'varchar',
    unique: true,
  })
  gum?: number;

  @Column({
    name: 'password',
    type: 'varchar',
  })
  password: string;

  @Column({
    name: 'public_address',
    type: 'varchar',
  })
  public_address?: string;

  @Column({
    name: 'nonce',
    type: 'varchar',
  })
  nonce?: string;

  @Column({
    name: 'is_verified',
    type: 'boolean',
  })
  is_verified?: boolean;

  @Column({
    name: 'is_active',
    type: 'boolean',
  })
  is_active?: boolean;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
