import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KebunTebu } from './kebun-tebu.entity';

@Injectable()
export class KebunTebuService {
  constructor(
    @InjectRepository(KebunTebu)
    private kebunTebuRepository: Repository<KebunTebu>,
  ) {}

  findAll(): Promise<KebunTebu[]> {
    return this.kebunTebuRepository.find();
  }

  create(data: Partial<KebunTebu>): Promise<KebunTebu> {
    const kebunTebu = this.kebunTebuRepository.create(data);
    return this.kebunTebuRepository.save(kebunTebu);
  }

  async update(id: number, data: Partial<KebunTebu>): Promise<KebunTebu> {
    await this.kebunTebuRepository.update(id, data);
    const updatedKebunTebu = await this.kebunTebuRepository.findOneBy({ id_kebun: id });
    if (!updatedKebunTebu) {
      throw new NotFoundException(`Data kebun tebu dengan id ${id} tidak ditemukan`);
    }
    return updatedKebunTebu;
  }

  async delete(id: number): Promise<void> {
    const result = await this.kebunTebuRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Data kebun tebu dengan id ${id} tidak ditemukan`);
    }
  }
}
