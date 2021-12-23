import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { playerSchema } from './schemas/players.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "players", schema: playerSchema}])],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
