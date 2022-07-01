import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

const tableName = 'factories';

export class addMultiColumnToFactoriesTable1656402598145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.addColumn(
        tableName,
        new TableColumn({
          name: 'energy_consumption',
          type: 'int',
          unsigned: true,
          default: 0,
        }),
      ),
      queryRunner.addColumn(
        tableName,
        new TableColumn({
          name: 'production_time',
          type: 'int',
          unsigned: true,
          default: 0,
        }),
      ),
      queryRunner.addColumn(
        tableName,
        new TableColumn({
          name: 'out_time',
          type: 'datetime',
        }),
      ),
      queryRunner.addColumn(
        tableName,
        new TableColumn({
          name: 'pause_time',
          type: 'datetime',
        }),
      ),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropColumn(tableName, 'energy_consumption'),
      queryRunner.dropColumn(tableName, 'production_time'),
      queryRunner.dropColumn(tableName, 'pause_time'),
      queryRunner.dropColumn(tableName, 'out_time'),
    ]);
  }
}
