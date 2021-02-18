import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedCreatedAtAndUpdatedAtTimestamps1613645373975 implements MigrationInterface {
    name = 'AddedCreatedAtAndUpdatedAtTimestamps1613645373975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "project" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "project" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "created"`);
    }

}
