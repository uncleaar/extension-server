import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ChangeAccountDto } from './account.dto';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  async createAccount(userId: number) {
    return this.db.account.create({
      data: {
        ownerId: userId,
        isBlockingEnabled: false,
      },
    });
  }

  async getAccount(userId: number) {
    return this.db.account.findFirstOrThrow({ where: { ownerId: userId } });
  }

  async changeAccount(userId: number, change: ChangeAccountDto) {
    return this.db.account.update({
      where: { ownerId: userId },
      data: { ...change },
    });
  }
}
