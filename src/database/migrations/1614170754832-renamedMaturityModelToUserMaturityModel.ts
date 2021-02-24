import {MigrationInterface, QueryRunner} from "typeorm";

export class renamedMaturityModelToUserMaturityModel1614170754832 implements MigrationInterface {
    name = 'renamedMaturityModelToUserMaturityModel1614170754832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_a6b17e9984dde7b20a90017a723"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" RENAME COLUMN "maturityModelId" TO "userMaturityModelId"`);
        await queryRunner.query(`CREATE TABLE "user_maturity_model" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "maturityLevel" double precision, "created" TIMESTAMP NOT NULL DEFAULT now(), "creator" character varying NOT NULL, "updated" TIMESTAMP NOT NULL DEFAULT now(), "updater" character varying NOT NULL, CONSTRAINT "PK_b2b4fa5d7d70f2606d6ed416f21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_user_maturity_models_user_maturity_model" ("projectId" integer NOT NULL, "userMaturityModelId" integer NOT NULL, CONSTRAINT "PK_c6cca53096330f94ece9dfd1578" PRIMARY KEY ("projectId", "userMaturityModelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4c71ccb89e9411cf2a51c9a637" ON "project_user_maturity_models_user_maturity_model" ("projectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4d3bdf6f9d377918210c5c3fc8" ON "project_user_maturity_models_user_maturity_model" ("userMaturityModelId") `);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_a935e13e802de76d1ca66194fb5" FOREIGN KEY ("userMaturityModelId") REFERENCES "user_maturity_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_user_maturity_models_user_maturity_model" ADD CONSTRAINT "FK_4c71ccb89e9411cf2a51c9a6374" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_user_maturity_models_user_maturity_model" ADD CONSTRAINT "FK_4d3bdf6f9d377918210c5c3fc8a" FOREIGN KEY ("userMaturityModelId") REFERENCES "user_maturity_model"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_user_maturity_models_user_maturity_model" DROP CONSTRAINT "FK_4d3bdf6f9d377918210c5c3fc8a"`);
        await queryRunner.query(`ALTER TABLE "project_user_maturity_models_user_maturity_model" DROP CONSTRAINT "FK_4c71ccb89e9411cf2a51c9a6374"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_a935e13e802de76d1ca66194fb5"`);
        await queryRunner.query(`DROP INDEX "IDX_4d3bdf6f9d377918210c5c3fc8"`);
        await queryRunner.query(`DROP INDEX "IDX_4c71ccb89e9411cf2a51c9a637"`);
        await queryRunner.query(`DROP TABLE "project_user_maturity_models_user_maturity_model"`);
        await queryRunner.query(`DROP TABLE "user_maturity_model"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" RENAME COLUMN "userMaturityModelId" TO "maturityModelId"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_a6b17e9984dde7b20a90017a723" FOREIGN KEY ("maturityModelId") REFERENCES "maturity_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
