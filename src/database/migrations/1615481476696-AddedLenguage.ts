import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedLenguage1615481476696 implements MigrationInterface {
    name = 'AddedLenguage1615481476696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maturity_model" ADD "language" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maturity_model" DROP COLUMN "language"`);
    }

}
