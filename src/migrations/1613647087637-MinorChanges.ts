import {MigrationInterface, QueryRunner} from "typeorm";

export class MinorChanges1613647087637 implements MigrationInterface {
    name = 'MinorChanges1613647087637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_partial_model" RENAME COLUMN "maturityLevelEvaluationAreas" TO "maturityLevelEvaluationMetrics"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_partial_model" RENAME COLUMN "maturityLevelEvaluationMetrics" TO "maturityLevelEvaluationAreas"`);
    }

}
