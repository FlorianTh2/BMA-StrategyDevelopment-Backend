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
export class MaturityModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("float", {
        nullable: true,
    })
    maturityLevel: number;

    @ManyToMany(() => Project, (project) => project.maturityModels)
    projects: Project[];

    @OneToMany(() => UserPartialModel, (userPartialModel) => userPartialModel.maturityModel)
    userPartialModels: UserPartialModel[];

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
