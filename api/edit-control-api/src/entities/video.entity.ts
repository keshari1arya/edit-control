import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  url: string;
}
