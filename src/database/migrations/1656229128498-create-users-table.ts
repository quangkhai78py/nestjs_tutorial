import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'users';

export class createUsersTable1656229128498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: tableName,
      columns: [
        {
          name: 'id',
          type: 'bigint',
          isPrimary: true,
          generationStrategy: 'increment',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'avatar',
          type: 'varchar',
        },
        {
          name: 'gum',
          type: 'decimal(20, 8)',
          isNullable: false,
          default: 0,
          unsigned: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'public_address',
          type: 'varchar',
        },
        {
          name: 'nonce',
          type: 'int',
        },
        {
          name: 'is_verified',
          type: 'boolean',
          isNullable: false,
          default: false,
        },
        {
          name: 'is_active',
          type: 'boolean',
          isNullable: false,
          default: true,
        },
        {
          name: 'created_at',
          type: 'datetime',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'datetime',
          default: 'now()',
        },
        {
          name: 'deleted_at',
          type: 'datetime',
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(tableName);
  }
}
