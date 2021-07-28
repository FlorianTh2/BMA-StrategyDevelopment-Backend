import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserMaturityModel } from "./userMaturityModel";
import { User } from "./user";
import { Project } from "./project";

@Entity()
export class ConsistencyMatrix {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column({
        length: 100,
    })
    filename: string;

    @Column("text", {
        nullable: true,
    })
    description: string;

    @Column({
        name: "fileData",
        type: "bytea",
        nullable: false,
    })
    fileData: Buffer;

    @ManyToOne(() => Project, (project) => project.consistencyMatrices)
    project: Project;

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
