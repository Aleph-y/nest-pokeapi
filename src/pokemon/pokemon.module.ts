import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModel } from './entities';

@Module({
  imports: [MongooseModule.forFeature([PokemonModel])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
