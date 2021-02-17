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
import { EvaluationArea } from "./evaluationArea";

@Entity()
export class PartialModel extends BaseEntity {
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

    @OneToMany(() => EvaluationArea, (evaluationArea) => evaluationArea.partialModel)
    evaluationAreas: EvaluationArea[];

    @OneToMany(() => UserPartialModel, (userPartialModel) => userPartialModel.partialModel)
    userPartialModels: UserPartialModel[];

    @OneToMany(() => PartialModel, (PartialModel) => PartialModel.superPartialModel)
    subPartialModels: PartialModel[];

    @ManyToOne(() => PartialModel, (PartialModel) => PartialModel.subPartialModels)
    superPartialModel: PartialModel;
}
