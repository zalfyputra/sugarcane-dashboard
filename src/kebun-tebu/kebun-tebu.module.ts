import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KebunTebu } from './kebun-tebu.entity';
import { KebunTebuService } from './kebun-tebu.service';
import { KebunTebuController } from './kebun-tebu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([KebunTebu])],
  providers: [KebunTebuService],
  controllers: [KebunTebuController],
})
export class KebunTebuModule {}
