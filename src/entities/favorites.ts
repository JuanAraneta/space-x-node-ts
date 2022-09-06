import {
  Entity,
  PrimaryColumn,
  Column,
  Index,
  CreateDateColumn,
} from "typeorm";

@Entity()
@Index(["user_id", "flight_number"], { unique: true })
export class Favorites {
  @PrimaryColumn()
  flight_number: number;

  @Index()
  @Column({ nullable: false })
  user_id: number;

  @CreateDateColumn()
  created_at: Date;
}
