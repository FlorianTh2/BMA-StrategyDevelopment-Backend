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
import { UserPartialModel } from "./userPartialModel";
import { EvaluationArea } from "./evaluationArea";

@Entity()
export class UserEvaluationArea extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valueEvaluationArea: number;

    @ManyToOne(() => UserPartialModel, (userPartialModel) => userPartialModel.userEvaluationAreas)
    userPartialModel: UserPartialModel;

    @ManyToOne(() => EvaluationArea, (evaluationArea) => evaluationArea.userEvaluationAreas)
    evaluationArea: EvaluationArea;
}
