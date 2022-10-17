import {MigrationInterface, QueryRunner} from "typeorm";

export class init1665984489711 implements MigrationInterface {
    name = 'init1665984489711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "postt" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_69660311bd23dc57fe9a363cc1d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "postt"`);
    }

}
