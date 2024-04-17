import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() data: CreatePokemonDto) {
    return this.pokemonService.create(data);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':pokedex')
  findOne(@Param('pokedex') pokedex: string) {
    return this.pokemonService.findOne(+pokedex);
  }

  @Patch(':pokedex')
  update(@Param('pokedex') pokedex: string, @Body() data: UpdatePokemonDto) {
    return this.pokemonService.update(+pokedex, data);
  }

  @Delete(':pokedex')
  remove(@Param('pokedex') pokedex: string) {
    return this.pokemonService.remove(+pokedex);
  }
}
