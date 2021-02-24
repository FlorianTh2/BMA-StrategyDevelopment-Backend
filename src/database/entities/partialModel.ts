import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserPartialModel } from "./userPartialModel";
import { EvaluationMetric } from "./evaluationMetric";
import { UserMaturityModel } from "./userMaturityModel";
import { MaturityModel } from "./maturityModel";

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

    @ManyToOne(() => MaturityModel, (maturityModel) => maturityModel.partialModels)
    maturityModel: MaturityModel;

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
