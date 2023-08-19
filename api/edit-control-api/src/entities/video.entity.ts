import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column()
  url: string;
}
