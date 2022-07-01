import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'tracking_play_adventures';

export class createTrackingPlayAdventuresTable1656402248368 implements MigrationInterface {
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
          name: 'number_of_time',
          type: 'int',
          unsigned: true,
          isNullable: false,
          default: 0,
        },
        {
          name: 'start_time',
          type: 'datetime',
          isNullable: false,
        },
        {
          name: 'end_time',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
