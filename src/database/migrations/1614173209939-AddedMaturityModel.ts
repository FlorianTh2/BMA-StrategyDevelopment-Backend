import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedMaturityModel1614173209939 implements MigrationInterface {
    name = 'AddedMaturityModel1614173209939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maturity_model" RENAME COLUMN "maturityLevel" TO "version"`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD "maturityModelId" integer`);
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "version"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "version" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD CONSTRAINT "FK_6cdf6409134a57802ac6faf7637" FOREIGN KEY ("maturityModelId") REFERENCES "maturity_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partial_model" DROP CONSTRAINT "FK_6cdf6409134a57802ac6faf7637"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "version"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "version" double precision`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP COLUMN "maturityModelId"`);
        await queryRunner.query(`ALTER TABLE "maturity_model" RENAME COLUMN "version" TO "maturityLevel"`);
    }

}
