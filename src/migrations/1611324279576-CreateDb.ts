import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDb1611324279576 implements MigrationInterface {
    name = 'CreateDb1611324279576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "name12" character varying(100) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
