import {MigrationInterface, QueryRunner} from "typeorm";

export class AdjustedWholeDbModel1613602404651 implements MigrationInterface {
    name = 'AdjustedWholeDbModel1613602404651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_ae7b3a76b8a4bee7ba0f1d64787"`);
        await queryRunner.query(`CREATE TABLE "partial_model" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "weight" integer NOT NULL, "superPartialModelId" integer, CONSTRAINT "PK_de74d4fd32e6f35ab531e156f45" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_evaluation_area" ("id" SERIAL NOT NULL, "valueEvaluationArea" integer NOT NULL, "userPartialModelId" integer, "evaluationAreaId" integer, CONSTRAINT "PK_8bba4391fc8204b7534419c295a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evaluation_area" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "weight" integer NOT NULL, "partialModelId" integer, CONSTRAINT "PK_fddade66ff1ffdf7050c3e3f5bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "superPartialModelId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "maturityLevelEvaluationAreas" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "partialModelId" integer`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "superUserPartialModelId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstname" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastname" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "verificationCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "verified" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partial_model" ADD CONSTRAINT "FK_baa592dc5128c676e8a8efab56c" FOREIGN KEY ("superPartialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_b2539d300c25fb9a2b0d50841f7" FOREIGN KEY ("partialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_1da23ae12f4cb69a1e531607e68" FOREIGN KEY ("superUserPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_area" ADD CONSTRAINT "FK_4975b8878ed2566a3c422b6e415" FOREIGN KEY ("userPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_area" ADD CONSTRAINT "FK_ed1d531730ef119720136f31e5e" FOREIGN KEY ("evaluationAreaId") REFERENCES "evaluation_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluation_area" ADD CONSTRAINT "FK_a29b9db2c639e3d905f660429ea" FOREIGN KEY ("partialModelId") REFERENCES "partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_area" DROP CONSTRAINT "FK_a29b9db2c639e3d905f660429ea"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_area" DROP CONSTRAINT "FK_ed1d531730ef119720136f31e5e"`);
        await queryRunner.query(`ALTER TABLE "user_evaluation_area" DROP CONSTRAINT "FK_4975b8878ed2566a3c422b6e415"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_1da23ae12f4cb69a1e531607e68"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP CONSTRAINT "FK_b2539d300c25fb9a2b0d50841f7"`);
        await queryRunner.query(`ALTER TABLE "partial_model" DROP CONSTRAINT "FK_baa592dc5128c676e8a8efab56c"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "verified"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "verificationCode"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastname"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstname"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "superUserPartialModelId"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "partialModelId"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" DROP COLUMN "maturityLevelEvaluationAreas"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD "superPartialModelId" integer`);
        await queryRunner.query(`DROP TABLE "evaluation_area"`);
        await queryRunner.query(`DROP TABLE "user_evaluation_area"`);
        await queryRunner.query(`DROP TABLE "partial_model"`);
        await queryRunner.query(`ALTER TABLE "user_partial_model" ADD CONSTRAINT "FK_ae7b3a76b8a4bee7ba0f1d64787" FOREIGN KEY ("superPartialModelId") REFERENCES "user_partial_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
