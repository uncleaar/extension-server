import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';
import { DbService } from './db/db.service';

class MessageDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: MessageDto,
  })
  async getHello(): Promise<MessageDto> {
    await this.dbService.user.findMany({});
    return {
      message: this.appService.getHello(),
    };
  }
}
