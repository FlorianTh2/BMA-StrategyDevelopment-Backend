import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Project } from "./project";

@Entity()
export class MaturityModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    // @OneToMany(() => ModelCategory, (modelCategory) => modelCategory.maturityModel)
    // modelCategories: ModelCategory[];
}
