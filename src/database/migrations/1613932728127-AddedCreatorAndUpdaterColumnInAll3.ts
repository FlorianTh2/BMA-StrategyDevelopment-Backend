import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedCreatorAndUpdaterColumnInAll31613932728127 implements MigrationInterface {
    name = 'AddedCreatorAndUpdaterColumnInAll31613932728127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."creator" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "creator" SET DEFAULT 'SYSTEM'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "creator" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."creator" IS NULL`);
    }

}
