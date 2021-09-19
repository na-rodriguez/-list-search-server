import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contacts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  age!: number

  @Column()
  picture!: string

  @Column()
  eyeColor!: string

  @Column()
  name!: string

  @Column()
  company!: string

  @Column()
  email!: string
}
