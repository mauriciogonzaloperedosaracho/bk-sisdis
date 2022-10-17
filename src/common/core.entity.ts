import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CoreEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
