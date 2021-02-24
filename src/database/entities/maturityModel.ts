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
import { PartialModel } from "./partialModel";

@Entity()
export class MaturityModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("int")
    version: number;

    @OneToMany(() => PartialModel, (partialModel) => partialModel.maturityModel)
    partialModels: PartialModel[];

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
