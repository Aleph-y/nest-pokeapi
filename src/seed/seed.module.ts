import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModel } from 'src/pokemon/entities';

@Module({
  imports: [MongooseModule.forFeature([PokemonModel])],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
