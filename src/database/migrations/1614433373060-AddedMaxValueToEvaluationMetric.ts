import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedMaxValueToEvaluationMetric1614433373060 implements MigrationInterface {
    name = 'AddedMaxValueToEvaluationMetric1614433373060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD "maxValue" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP COLUMN "maxValue"`);
    }

}
