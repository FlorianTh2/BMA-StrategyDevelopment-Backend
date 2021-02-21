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
import { MaturityModel } from "./maturityModel";
import { User } from "./user";

@Entity()
export class Project {
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

    @ManyToOne(() => User, (user) => user.projects)
    user: User;

    @Column({ nullable: true })
    userId: number;

    @ManyToMany(() => MaturityModel)
    @JoinTable()
    maturityModels: MaturityModel[];

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
