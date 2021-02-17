import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    OneToMany,
    ManyToOne,
} from "typeorm";
import { Project } from "./project";
import { User } from "./user";
import { MaturityModel } from "./maturityModel";
import { UserEvaluationArea } from "./userEvaluationArea";
import { UserPartialModel } from "./userPartialModel";
import { PartialModel } from "./partialModel";

@Entity()
export class EvaluationArea extends BaseEntity {
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

    @Column()
    weight: number;

    @OneToMany(() => UserEvaluationArea, (userEvaluationArea) => userEvaluationArea.evaluationArea)
    userEvaluationAreas: UserEvaluationArea[];

    @ManyToOne(() => PartialModel, (partialModel) => partialModel.evaluationAreas)
    partialModel: PartialModel;
}
