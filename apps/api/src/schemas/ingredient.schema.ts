import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Unit } from '@fugitive/interfaces';

export type IngredientDocument = HydratedDocument<Ingredient>;

@Schema({ timestamps: true })
export class Ingredient {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, enum: Object.values(Unit) })
  unit: Unit;

  @Prop({
    type: { quantity: Number, lastUpdated: Date },
    default: { quantity: 0, lastUpdated: Date.now },
  })
  stock: {
    quantity: number;
    lastUpdated: Date;
  };
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
