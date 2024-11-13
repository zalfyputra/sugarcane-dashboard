import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { KebunTebuService } from './kebun-tebu.service';
import { KebunTebu } from './kebun-tebu.entity';

@Controller('kebun-tebu')
export class KebunTebuController {
  constructor(private readonly kebunTebuService: KebunTebuService) {}

  @Get()
  findAll(): Promise<KebunTebu[]> {
    return this.kebunTebuService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<KebunTebu>): Promise<{ message: string; data: KebunTebu }> {
    const newKebunTebu = await this.kebunTebuService.create(data);
    return {
      message: 'Data kebun tebu berhasil ditambahkan',
      data: newKebunTebu,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<KebunTebu>,
  ): Promise<{ message: string; data: KebunTebu }> {
    const updatedKebunTebu = await this.kebunTebuService.update(id, data);
    return {
      message: `Data kebun tebu dengan id ${id} berhasil diperbarui`,
      data: updatedKebunTebu,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    await this.kebunTebuService.delete(id);
    return {
      message: `Data kebun tebu dengan id ${id} berhasil dihapus`,
    };
  }
}
