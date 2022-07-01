import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'markets';

export class createMarketsTable1656381976494 implements MigrationInterface {
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
            name: 'order_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'token_id',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'buyer',
            type: 'varchar',
          },
          {
            name: 'sale_at',
            type: 'datetime',
          },
          {
            name: 'expires_at',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'decimal(50, 8)',
            isNullable: false,
            default: 0,
          },
          {
            name: 'wei_price',
            type: 'varchar',
          },
          {
            name: 'total_price',
            type: 'decimal(50, 8)',
            isNullable: false,
            default: 0,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'seller',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'tinyint',
            isNullable: false,
          },
          {
            name: 'modify_at',
            type: 'datetime',
          },
          {
            name: 'start_sale_at',
            type: 'datetime',
          },
          {
            name: 'tx_hast_sell',
            type: 'varchar'
          },
          {
            name: 'tx_hast_buy',
            type: 'varchar'
          },
          {
            name: 'tx_hast_cancel',
            type: 'varchar'
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
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(tableName);
    }
}
