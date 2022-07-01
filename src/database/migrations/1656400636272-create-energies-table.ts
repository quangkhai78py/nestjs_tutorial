import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'energies';

export class createEnergiesTable1656400636272 implements MigrationInterface {
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
          name: 'pack',
          type: 'int',
          unsigned: true,
          isNullable: false,
          default: 0,
        },
        {
          name: 'price',
          type: 'int',
          unsigned: true,
          isNullable: false,
          default: 0,
        },
        {
          name: 'energy',
          type: 'decimal(20, 8)',
          unsigned: true,
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
