import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { BlockListQueryDto, NewBlockItemDto } from './block-list.dto';

@Injectable()
export class BlockListService {
  constructor(private db: DbService) {}

  create(userId) {
    return this.db.blockList.create({ data: { ownerId: userId } });
  }

  getByUser(userId: number, query: BlockListQueryDto) {
    return this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          orderBy: { createdAt: 'desc' },
          where: { data: { contains: query.q, mode: 'insensitive' } },
        },
      },
    });
  }

  async createItem(userId: number, data: NewBlockItemDto) {
    const list = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });

    return this.db.blockItem.create({
      data: { blockListId: list.id, ...data },
    });
  }

  async deleteItem(userId: number, itemId: number) {
    const list = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });

    return this.db.blockItem.delete({
      where: {
        blockListId: list.id,
        id: itemId,
      },
    });
  }
}
