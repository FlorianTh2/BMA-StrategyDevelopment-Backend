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
import { UserPartialModel } from "./userPartialModel";
import { EvaluationMetric } from "./evaluationMetric";

@Entity()
export class UserEvaluationMetric extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valueEvaluationMetric: number;

    @ManyToOne(() => UserPartialModel, (userPartialModel) => userPartialModel.userEvaluationAreas)
    userPartialModel: UserPartialModel;

    @ManyToOne(() => EvaluationMetric, (evaluationArea) => evaluationArea.userEvaluationAreas)
    evaluationArea: EvaluationMetric;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
