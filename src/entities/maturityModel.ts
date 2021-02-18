import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./project";
import { UserPartialModel } from "./userPartialModel";

@Entity()
export class MaturityModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column({
        nullable: true,
    })
    maturityLevel: number;

    @OneToMany(() => UserPartialModel, (userPartialModel) => userPartialModel.maturityModel)
    userPartialModels: UserPartialModel[];

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
