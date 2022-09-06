import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createFavorites1661780139212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "favorites",
        columns: [
          {
            name: "flight_number",
            type: "int",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("favorites");
  }
}
