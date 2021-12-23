import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersValidatorPipe } from './pipes/players-validator-pipes';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  public async create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  public async findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.playersService.findOne(id);
  }

  @Patch(':email')
  public async update(@Param('email') email: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(email, updatePlayerDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.playersService.remove(id);
  }
}
