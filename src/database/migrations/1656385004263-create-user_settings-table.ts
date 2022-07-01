import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const tableName = 'user_settings';

export class createUserSettingsTable1656385004263 implements MigrationInterface {
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
          name: 'user_id',
          type: 'bigint',
          isNullable: false,
          isUnique: true,
          unsigned: true,
        },
        {
          name: 'sound',
          type: 'tinyint',
          isNullable: false,
          default: 1,
        },
        {
          name: 'music',
          type: 'tinyint',
          isNullable: false,
          default: 1,
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
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
