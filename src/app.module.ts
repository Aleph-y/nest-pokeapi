import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://Monthly9724:ZmpFMglaS75II7Hv@cursos.zxgsznx.mongodb.net/pokemon?retryWrites=true&w=majority',
    ),
    PokemonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
