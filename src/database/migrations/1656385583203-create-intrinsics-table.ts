import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'intrinsics';

export class createIntrinsicsTable1656385583203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: tableName,
      columns: [
        {
          name: 'id',
          type: 'bigint',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'ability',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'target',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'value',
          type: 'int',
          isNullable: false,
          default: 0,
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
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
