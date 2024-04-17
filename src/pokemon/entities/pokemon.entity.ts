import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon extends Document {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    type: Number,
    required: true,
    unique: true,
    index: true,
  })
  pokedex: number;

  @Prop({
    type: String,
    required: true,
  })
  image: string;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);

export const PokemonModel: ModelDefinition = {
  name: Pokemon.name,
  schema: PokemonSchema,
};
