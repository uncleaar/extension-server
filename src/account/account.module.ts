import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [DbModule],
  exports: [AccountService],
})
export class AccountModule {}
