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
import { EvaluationMetric } from "./evaluationMetric";

@Entity()
export class PartialModel {
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

    @OneToMany(() => EvaluationMetric, (evaluationArea) => evaluationArea.partialModel)
    evaluationMetrics: EvaluationMetric[];

    @OneToMany(() => UserPartialModel, (userPartialModel) => userPartialModel.partialModel)
    userPartialModels: UserPartialModel[];

    @OneToMany(() => PartialModel, (PartialModel) => PartialModel.superPartialModel)
    subPartialModels: PartialModel[];

    @ManyToOne(() => PartialModel, (PartialModel) => PartialModel.subPartialModels)
    superPartialModel: PartialModel;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
