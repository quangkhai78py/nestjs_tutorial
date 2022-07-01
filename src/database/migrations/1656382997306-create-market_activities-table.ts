import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const tableName = 'market_activities';

export class createMarketActivitiesTable1656382997306 implements MigrationInterface {
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
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'public_address',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'action',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'action_at',
          type: 'datetime',
          isNullable: false,
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

    await queryRunner.createForeignKey(
      tableName,
      new TableForeignKey({
        columnNames: ['market_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'markets',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
