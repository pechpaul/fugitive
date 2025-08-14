// apps/api/src/app/schemas/packaging.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PackagingDocument = HydratedDocument<Packaging>;

@Schema({ timestamps: true })
export class Packaging {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: 'item' })
  unit: string;

  @Prop({ default: 0 })//amount of product inside
  size: number;

  @Prop({ default: 0 })//amount of product inside
  price: number

  @Prop({ type: { quantity: Number, lastUpdated: Date }, default: { quantity: 0 } })
  stock: {
    quantity: number;
    lastUpdated: Date;
  };
}

export const PackagingSchema = SchemaFactory.createForClass(Packaging);
