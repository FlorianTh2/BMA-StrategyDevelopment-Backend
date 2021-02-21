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

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    firstname: string;

    @Column({
        length: 100,
    })
    lastname: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @Column({
        nullable: true,
    })
    phoneNumber: string;

    @Column({
        nullable: true,
    })
    verificationCode: string;

    @Column({ default: false })
    verified: boolean;

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
