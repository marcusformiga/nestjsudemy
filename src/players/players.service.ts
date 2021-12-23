import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { IPlayer } from './interfaces/iplayers.interface';

@Injectable()
export class PlayersService {
  constructor(@InjectModel("players") private readonly playerModel: Model<IPlayer>){}
  public async create(createPlayerDto: CreatePlayerDto): Promise<IPlayer>{
    const {email} = createPlayerDto
    const playerExist = await this.findByEmail(email)
    if(playerExist) throw new ConflictException()
    const createPlayer = new this.playerModel(createPlayerDto)
    return await createPlayer.save()
  }

  public async findAll(): Promise<IPlayer[]>{
    return await this.playerModel.find()
  }

  public async findOne(id: string): Promise<IPlayer | undefined>{
    const playerExist = await this.playerModel.findOne({_id: id})
    if(!playerExist){
      throw new NotFoundException()
    }
    return playerExist
  }
  public async findByEmail(email: string): Promise<IPlayer | undefined>{
    const playerExist = await this.playerModel.findOne({email})
    if(!playerExist){
      throw new NotFoundException()
    }
    return playerExist
  }

  public async update(email: string, updatePlayerDto: UpdatePlayerDto): Promise<IPlayer>{
    return await this.playerModel.findOneAndUpdate({email}, {$set: updatePlayerDto})
  }

  public async remove(id: string): Promise<void>{
    
    await this.playerModel.findOneAndRemove({_id: id})
  }
}
