import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedCreatorAndUpdaterColumnInAll21613932342448 implements MigrationInterface {
    name = 'AddedCreatorAndUpdaterColumnInAll21613932342448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "updater" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD "updater" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "updater" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD "updater" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD "updater" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updater" character varying NOT NULL DEFAULT 'SYSTEM'`);
        await queryRunner.query(`ALTER TABLE "project" ADD "creator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ADD "updater" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "updater"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "creator"`);
    }

}
