import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1665981236402 implements MigrationInterface {
  name = 'init1665981236402';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "postt" DROP COLUMN "heading"`);
    await queryRunner.query(`ALTER TABLE "postt" DROP COLUMN "content"`);
    await queryRunner.query(`ALTER TABLE "postt" DROP COLUMN "isPublished"`);
    await queryRunner.query(
      `ALTER TABLE "postt" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "postt" ADD "completed" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "postt" DROP COLUMN "completed"`);
    await queryRunner.query(`ALTER TABLE "postt" DROP COLUMN "name"`);
    await queryRunner.query(
      `ALTER TABLE "postt" ADD "isPublished" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "postt" ADD "content" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "postt" ADD "heading" character varying NOT NULL`,
    );
  }
}
