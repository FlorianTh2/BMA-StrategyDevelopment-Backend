import {MigrationInterface, QueryRunner} from "typeorm";

export class consistencyMatrixAddedFilenameColumn1627490367819 implements MigrationInterface {
    name = 'consistencyMatrixAddedFilenameColumn1627490367819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consistency_matrix" ADD "filename" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consistency_matrix" DROP COLUMN "filename"`);
    }

}
