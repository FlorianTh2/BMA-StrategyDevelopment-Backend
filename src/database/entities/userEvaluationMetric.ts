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
export class UserEvaluationMetric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("float")
    valueEvaluationMetric: number;

    @ManyToOne(() => UserPartialModel, (userPartialModel) => userPartialModel.userEvaluationMetrics)
    userPartialModel: UserPartialModel;

    @ManyToOne(() => EvaluationMetric, (evaluationArea) => evaluationArea.userEvaluationAreas)
    evaluationMetric: EvaluationMetric;

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
