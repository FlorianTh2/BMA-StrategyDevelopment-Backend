import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedMinValue1615463383020 implements MigrationInterface {
    name = 'AddedMinValue1615463383020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_metric" ADD "minValue" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_metric" DROP COLUMN "minValue"`);
    }

}
