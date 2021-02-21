import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./project";
import { User } from "./user";
import { MaturityModel } from "./maturityModel";
import { UserEvaluationMetric } from "./userEvaluationMetric";
import { PartialModel } from "./partialModel";

@Entity()
export class UserPartialModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("float", {
        nullable: true,
    })
    maturityLevelEvaluationMetrics: number;

    @ManyToOne(() => PartialModel, (partialModel) => partialModel.userPartialModels)
    partialModel: PartialModel;

    @OneToMany(() => UserEvaluationMetric, (userEvaluationArea) => userEvaluationArea.userPartialModel)
    userEvaluationAreas: UserEvaluationMetric[];

    @ManyToOne(() => MaturityModel, (maturityModel) => maturityModel.userPartialModels)
    maturityModel: MaturityModel;

    @OneToMany(() => UserPartialModel, (userPartialModel) => userPartialModel.superUserPartialModel)
    subUserPartialModels: UserPartialModel[];

    @ManyToOne(() => UserPartialModel, (userPartialModel) => userPartialModel.subUserPartialModels)
    superUserPartialModel: UserPartialModel;

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
