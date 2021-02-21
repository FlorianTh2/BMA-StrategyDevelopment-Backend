import {MigrationInterface, QueryRunner} from "typeorm";

export class InitWholeDb1613681382631 implements MigrationInterface {
    name = 'InitWholeDb1613681382631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maturity_model" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "maturityLevel" double precision, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e02e2b74cdab1cf067167b950e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partial_model" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "weight" double precision NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "superPartialModelId" integer, CONSTRAINT "PK_de74d4fd32e6f35ab531e156f45" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_partial_model" ("id" SERIAL NOT NULL, "maturityLevelEvaluationMetrics" double precision, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "partialModelId" integer, "maturityModelId" integer, "superUserPartialModelId" integer, CONSTRAINT "PK_02bfd364badd46f1f3dd60c3130" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_evaluation_metric" ("id" SERIAL NOT NULL, "valueEvaluationMetric" double precision NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "userPartialModelId" integer, "evaluationMetricId" integer, CONSTRAINT "PK_b60bd9b81bf81897ed256dd7ed8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evaluation_metric" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "weight" double precision NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "partialModelId" integer, CONSTRAINT "PK_015e51b3e29da7729f91a6aff2e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstname" character varying(100) NOT NULL, "lastname" character varying(100) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phoneNumber" character varying, "verificationCode" character varying, "verified" boolean NOT NULL DEFAULT false, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_maturity_models_maturity_model" ("projectId" integer NOT NULL, "maturityModelId" integer NOT NULL, CONSTRAINT "PK_69afa600b3c6853ed385c03f1fe" PRIMARY KEY ("projectId", "maturityModelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b2f36a2da4981c954157b38b6d" ON "project_maturity_models_maturity_model" ("projectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_dc5167041681822729bae38a73" ON "project_maturity_models_maturity_model" ("maturityModelId") `);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD CONSTRAINT "FK_baa592dc5128c676e8a8efab56c" FOREIGN KEY ("superPartialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_b2539d300c25fb9a2b0d50841f7" FOREIGN KEY ("partialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_a6b17e9984dde7b20a90017a723" FOREIGN KEY ("maturityModelId") REFERENCES "maturity_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_1da23ae12f4cb69a1e531607e68" FOREIGN KEY ("superUserPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD CONSTRAINT "FK_8dfc16a9ddf5fac226d3be2eb8d" FOREIGN KEY ("userPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" ADD CONSTRAINT "FK_ea5b47615a87e369db225f441f2" FOREIGN KEY ("evaluationMetricId") REFERENCES "evaluation_metric"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD CONSTRAINT "FK_d55e91ed8be6770384bb246559c" FOREIGN KEY ("partialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_maturity_models_maturity_model" ADD CONSTRAINT "FK_b2f36a2da4981c954157b38b6d3" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_maturity_models_maturity_model" ADD CONSTRAINT "FK_dc5167041681822729bae38a733" FOREIGN KEY ("maturityModelId") REFERENCES "maturity_model"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_maturity_models_maturity_model" DROP CONSTRAINT "FK_dc5167041681822729bae38a733"`);
        await queryRunner.query(`ALTER TABLE "project_maturity_models_maturity_model" DROP CONSTRAINT "FK_b2f36a2da4981c954157b38b6d3"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP CONSTRAINT "FK_d55e91ed8be6770384bb246559c"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP CONSTRAINT "FK_ea5b47615a87e369db225f441f2"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_metric" DROP CONSTRAINT "FK_8dfc16a9ddf5fac226d3be2eb8d"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_1da23ae12f4cb69a1e531607e68"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_a6b17e9984dde7b20a90017a723"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_b2539d300c25fb9a2b0d50841f7"`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP CONSTRAINT "FK_baa592dc5128c676e8a8efab56c"`);
        await queryRunner.query(`DROP INDEX "IDX_dc5167041681822729bae38a73"`);
        await queryRunner.query(`DROP INDEX "IDX_b2f36a2da4981c954157b38b6d"`);
        await queryRunner.query(`DROP TABLE "project_maturity_models_maturity_model"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "evaluation_metric"`);
        await queryRunner.query(`DROP TABLE "user_evaluation_metric"`);
        await queryRunner.query(`DROP TABLE "user_partial_model"`);
        await queryRunner.query(`DROP TABLE "partial_model"`);
        await queryRunner.query(`DROP TABLE "maturity_model"`);
    }

}
