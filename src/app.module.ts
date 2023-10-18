import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { BlockListModule } from './block-list/block-list.module';
import { CalendarModule } from './calendar/calendar.module';

@Module({
  imports: [
    DbModule,
    AuthModule,
    UsersModule,
    AccountModule,
    BlockListModule,
    CalendarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
