import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const tableName = 'astronauts';

export class createAstronautsTable1656398008199 implements MigrationInterface {
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
          name: 'intrinsic_id_1',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'intrinsic_id_2',
          type: 'bigint',
          isNullable: false,
          unsigned: true,
        },
        {
          name: 'intrinsic_id_3',
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
          columnNames: ['intrinsic_id_1'],
          referencedColumnNames: ['id'],
          referencedTableName: 'intrinsics',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['intrinsic_id_2'],
          referencedColumnNames: ['id'],
          referencedTableName: 'intrinsics',
          onDelete: 'CASCADE',
        }),
      ),
      queryRunner.createForeignKey(
        tableName, new TableForeignKey({
          columnNames: ['intrinsic_id_3'],
          referencedColumnNames: ['id'],
          referencedTableName: 'intrinsics',
          onDelete: 'CASCADE',
        }),
      ),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
