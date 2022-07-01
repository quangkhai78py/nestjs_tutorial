import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const tableName = 'planets'

export class createPlanetsTable1656386705966 implements MigrationInterface {
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
          name: 'token_id',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'user_id',
          type: 'bigint',
          unsigned: true,
        },
        {
          name: 'rarity',
          type: 'int',
          default: 1,
        },
        {
          name: 'planet_definition_id',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'ability_id_1',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'ability_id_2',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'ability_id_3',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'name',
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
          name: 'current_exp',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'current_energy',
          type: 'int',
          isNullable: false,
          default: 0,
          unsigned: true,
        },
        {
          name: 'last_time_update_energy',
          type: 'datetime',
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

    await Promise.all([
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['planet_definition_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'planet_definitions',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['ability_id_1'],
          referencedColumnNames: ['id'],
          referencedTableName: 'abilities',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['ability_id_2'],
          referencedColumnNames: ['id'],
          referencedTableName: 'abilities',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['ability_id_3'],
          referencedColumnNames: ['id'],
          referencedTableName: 'abilities',
          onDelete: 'CASCADE',
        }),
      ),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
