import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const tableName = 'market_astronauts';

export class createMarketAstronautsTable1656401663899 implements MigrationInterface {
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
          name: 'market_id',
          type: 'bigint',
          unsigned: true,
          isNullable: false,
        },
        {
          name: 'astronaut_id',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
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

    await Promise.all([
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['market_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'markets',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['astronaut_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'astronauts',
          onDelete: 'CASCADE',
        }),
      ),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
