import {
  ConflictException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {
  private portNumber: number;

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemon: Model<Pokemon>,
    private readonly config: ConfigService,
  ) {
    this.portNumber = this.config.get<number>('API_PORT');
  }

  async create(data: CreatePokemonDto) {
    try {
      const pokemons = await this.pokemon.create(data);

      return pokemons;
    } catch (error) {
      if (error.code === 11000) throw new ConflictException();
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const pokemons = await this.pokemon.find();

      return pokemons;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(pokedex: number) {
    try {
      const pokemon = await this.pokemon.findOne({ pokedex });
      if (!pokemon) throw new NotFoundException();

      return pokemon;
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) throw new NotFoundException();
      throw new InternalServerErrorException();
    }
  }

  async update(pokedex: number, data: UpdatePokemonDto) {
    try {
      const pokemon = await this.pokemon.findOneAndUpdate({ pokedex }, data, {
        new: true,
      });
      if (!pokemon) throw new NotFoundException();

      return pokemon;
    } catch (error) {
      if (error.code === 11000) throw new ConflictException();
      if (error.status === HttpStatus.NOT_FOUND) throw new NotFoundException();
      throw new InternalServerErrorException();
    }
  }

  async remove(pokedex: number) {
    try {
      const pokemon = await this.pokemon.findOneAndDelete(
        { pokedex },
        { new: true },
      );
      if (!pokemon) throw new NotFoundException();

      return pokemon;
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) throw new NotFoundException();
      throw new InternalServerErrorException();
    }
  }

  port() {
    return this.portNumber;
  }
}
