import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { MaturityModel } from "./maturityModel";
import { User } from "./user";

@Entity()
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text")
    description: string;

    @ManyToOne(() => User, (user) => user.projects)
    user: User;

    @ManyToMany(() => MaturityModel)
    @JoinTable()
    projects: MaturityModel[];
}
