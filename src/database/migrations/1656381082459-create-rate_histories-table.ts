import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'rate_histories';

export class createRateHistoriesTable1656381082459 implements MigrationInterface {
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
          unsigned: true,
        },
        {
          name: 'code',
          type: 'tinyint',
          isNullable: false,
          default: 0,
        },
        {
          name: 'rate',
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
