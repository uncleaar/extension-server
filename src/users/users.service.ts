import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

type User = {
  id: number;
  email: string;
  hash: string;
  salt: string;
};

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.db.user.findFirst({ where: { email } });
  }

  create(email: string, hash: string, salt: string) {
    return this.db.user.create({ data: { email, hash, salt } });
  }
}
