import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KebunTebuModule } from './kebun-tebu/kebun-tebu.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'tebu',
      autoLoadEntities: true,
      synchronize: true,
    }),
    KebunTebuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
