import {MigrationInterface, QueryRunner} from "typeorm";

export class AdjustedSingleEntities1613603559483 implements MigrationInterface {
    name = 'AdjustedSingleEntities1613603559483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maturity_model" ALTER COLUMN "maturityLevel" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "maturity_model"."maturityLevel" IS NULL`);
        await queryRunner.query(`ALTER TABLE "partial_model" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "partial_model"."description" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ALTER COLUMN "maturityLevelEvaluationAreas" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user_partial_model"."maturityLevelEvaluationAreas" IS NULL`);
        await queryRunner.query(`ALTER TABLE "evaluation_area" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "evaluation_area"."description" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "verificationCode" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."verificationCode" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."verified" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "verified" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "project"."description" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "project"."description" IS NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "verified" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."verified" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."verificationCode" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "verificationCode" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."email" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "evaluation_area"."description" IS NULL`);
        await queryRunner.query(`ALTER TABLE "evaluation_area" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user_partial_model"."maturityLevelEvaluationAreas" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ALTER COLUMN "maturityLevelEvaluationAreas" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "partial_model"."description" IS NULL`);
        await queryRunner.query(`ALTER TABLE "partial_model" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "maturity_model"."maturityLevel" IS NULL`);
        await queryRunner.query(`ALTER TABLE "maturity_model" ALTER COLUMN "maturityLevel" SET NOT NULL`);
    }

}
