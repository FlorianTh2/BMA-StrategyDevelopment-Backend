import {MigrationInterface, QueryRunner} from "typeorm";

export class consistencyMatrixRenamedFilenameColumn1627492564621 implements MigrationInterface {
    name = 'consistencyMatrixRenamedFilenameColumn1627492564621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consistency_matrix" RENAME COLUMN "imageData" TO "fileData"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consistency_matrix" RENAME COLUMN "fileData" TO "imageData"`);
    }

}
