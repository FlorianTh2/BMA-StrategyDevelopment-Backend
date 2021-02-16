import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUserTitle1613485788177 implements MigrationInterface {
    name = 'AlterUserTitle1613485788177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "title" character varying(100) NOT NULL`);
    }

}
