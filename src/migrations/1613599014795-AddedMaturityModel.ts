import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedMaturityModel1613599014795 implements MigrationInterface {
    name = 'AddedMaturityModel1613599014795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_partial_model" ("id" SERIAL NOT NULL, "maturityModelId" integer, CONSTRAINT "PK_02bfd364badd46f1f3dd60c3130" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "maturity_model" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "maturityLevel" integer NOT NULL, CONSTRAINT "PK_e02e2b74cdab1cf067167b950e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_projects_maturity_model" ("projectId" integer NOT NULL, "maturityModelId" integer NOT NULL, CONSTRAINT "PK_c21164fdae98c3a94a1361475aa" PRIMARY KEY ("projectId", "maturityModelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73193d3f0575655ee5e7678eb1" ON "project_projects_maturity_model" ("projectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b201f5f3aa082e8c5b0f139fef" ON "project_projects_maturity_model" ("maturityModelId") `);
        await queryRunner.query(`ALTER TABLE "project" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_a6b17e9984dde7b20a90017a723" FOREIGN KEY ("maturityModelId") REFERENCES "maturity_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_projects_maturity_model" ADD CONSTRAINT "FK_73193d3f0575655ee5e7678eb11" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_projects_maturity_model" ADD CONSTRAINT "FK_b201f5f3aa082e8c5b0f139fefb" FOREIGN KEY ("maturityModelId") REFERENCES "maturity_model"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_projects_maturity_model" DROP CONSTRAINT "FK_b201f5f3aa082e8c5b0f139fefb"`);
        await queryRunner.query(`ALTER TABLE "project_projects_maturity_model" DROP CONSTRAINT "FK_73193d3f0575655ee5e7678eb11"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_a6b17e9984dde7b20a90017a723"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP INDEX "IDX_b201f5f3aa082e8c5b0f139fef"`);
        await queryRunner.query(`DROP INDEX "IDX_73193d3f0575655ee5e7678eb1"`);
        await queryRunner.query(`DROP TABLE "project_projects_maturity_model"`);
        await queryRunner.query(`DROP TABLE "maturity_model"`);
        await queryRunner.query(`DROP TABLE "user_partial_model"`);
    }

}
