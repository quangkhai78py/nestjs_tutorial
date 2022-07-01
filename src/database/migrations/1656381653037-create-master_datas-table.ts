import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'master_datas';

export class createMasterDatasTable1656381653037 implements MigrationInterface {
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
          name: 'key',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'value',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'tinyint',
          isNullable: false,
          default: 0,
        },
        {
          name: 'description',
          type: 'text',
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
