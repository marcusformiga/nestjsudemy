import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionMongo } from 'constant';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [PlayersModule, MongooseModule.forRoot(connectionMongo)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
