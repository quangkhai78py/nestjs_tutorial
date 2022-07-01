import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const tableName = 'factories';

export class createFactoriesTable1656397966366 implements MigrationInterface {
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
          name: 'planet_id',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'status',
          type: 'tinyint',
          unsigned: true,
          isNullable: false,
          default: 0,
        },
        {
          name: 'production_duration',
          type: 'int',
          isNullable: false,
          default: 0,
          unsigned: true,
        },
        {
          name: 'start_time',
          type: 'datetime',
          isNullable: false
        },
        {
          name: 'end_time',
          type: 'datetime',
          isNullable: false
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
      tableName, new TableForeignKey({
        columnNames: ['planet_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'planets',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
