import {MigrationInterface, QueryRunner} from "typeorm";

export class AdjustedEvaluationAreaToEvaluationMetric1613645253499 implements MigrationInterface {
    name = 'AdjustedEvaluationAreaToEvaluationMetric1613645253499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_evaluation_metric" ("id" SERIAL NOT NULL, "valueEvaluationMetric" integer NOT NULL, "userPartialModelId" integer, "evaluationAreaId" integer, CONSTRAINT "PK_b60bd9b81bf81897ed256dd7ed8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evaluation_metric" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "weight" integer NOT NULL, "partialModelId" integer, CONSTRAINT "PK_015e51b3e29da7729f91a6aff2e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD CONSTRAINT "FK_8dfc16a9ddf5fac226d3be2eb8d" FOREIGN KEY ("userPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD CONSTRAINT "FK_0f06cb8afd9f563b9a5e3d6841a" FOREIGN KEY ("evaluationAreaId") REFERENCES "evaluation_metric"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD CONSTRAINT "FK_d55e91ed8be6770384bb246559c" FOREIGN KEY ("partialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP CONSTRAINT "FK_d55e91ed8be6770384bb246559c"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP CONSTRAINT "FK_0f06cb8afd9f563b9a5e3d6841a"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP CONSTRAINT "FK_8dfc16a9ddf5fac226d3be2eb8d"`);
        await queryRunner.query(`DROP TABLE "evaluation_metric"`);
        await queryRunner.query(`DROP TABLE "user_evaluation_metric"`);
    }

}
