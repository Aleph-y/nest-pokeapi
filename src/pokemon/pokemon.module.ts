import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModel } from './entities';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forFeature([PokemonModel]), ConfigModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
