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
import { UserPartialModel } from "./userPartialModel";
import { PartialModel } from "./partialModel";

@Entity()
export class EvaluationMetric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text", {
        nullable: true,
    })
    description: string;

    @Column("float")
    weight: number;

    @OneToMany(() => UserEvaluationMetric, (userEvaluationArea) => userEvaluationArea.evaluationMetric)
    userEvaluationAreas: UserEvaluationMetric[];

    @ManyToOne(() => PartialModel, (partialModel) => partialModel.evaluationMetrics)
    partialModel: PartialModel;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
