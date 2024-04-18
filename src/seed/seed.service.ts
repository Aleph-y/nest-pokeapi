import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities';
import { seedPokemon } from './seeds';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemon: Model<Pokemon>,
  ) {}

  async execute() {
    try {
      const seed = seedPokemon;
      return await this.pokemon.insertMany(seed);
    } catch (error) {
      if (error.code === 11000) throw new ConflictException();
      throw new InternalServerErrorException();
    }
  }
}
