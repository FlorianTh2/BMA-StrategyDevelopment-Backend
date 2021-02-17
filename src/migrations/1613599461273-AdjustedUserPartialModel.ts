import {MigrationInterface, QueryRunner} from "typeorm";

export class AdjustedUserPartialModel1613599461273 implements MigrationInterface {
    name = 'AdjustedUserPartialModel1613599461273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "superPartialModelId" integer`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_ae7b3a76b8a4bee7ba0f1d64787" FOREIGN KEY ("superPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_ae7b3a76b8a4bee7ba0f1d64787"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "superPartialModelId"`);
    }

}
