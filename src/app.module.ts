import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KebunTebuModule } from './kebun-tebu/kebun-tebu.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-ancient-cell-a1vm0d2f.ap-southeast-1.aws.neon.tech',
      port: 5432,
      username: 'tebu_owner',
      password: '5gYuBR2WsOkQ',
      database: 'tebu',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    KebunTebuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
