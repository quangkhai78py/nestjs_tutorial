import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'adventures';

export class createAdventuresTable1656385359108 implements MigrationInterface {
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
          name: 'level',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'part_in_adventure',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'speed_running',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'obstacle_spawn',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'meteorite_spawn',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'pack_energy_spawn',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'energy_pack',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'pack_exp_spawn',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'exp_pack',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'missile',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'meteor_speed',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'gun',
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
