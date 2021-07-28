import {MigrationInterface, QueryRunner} from "typeorm";

export class addedConsistencyMatrix1627490141564 implements MigrationInterface {
    name = 'addedConsistencyMatrix1627490141564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "consistency_matrix" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "imageData" bytea NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "creator" character varying NOT NULL, "updated" TIMESTAMP NOT NULL DEFAULT now(), "updater" character varying NOT NULL, "projectId" integer, CONSTRAINT "PK_4baa7c97feefdac8ab66848784e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "consistency_matrix" ADD CONSTRAINT "FK_926d3d3d0e069e424b2e91fba8f" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consistency_matrix" DROP CONSTRAINT "FK_926d3d3d0e069e424b2e91fba8f"`);
        await queryRunner.query(`DROP TABLE "consistency_matrix"`);
    }

}
