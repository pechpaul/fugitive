// apps/api/src/app/schemas/product.schema.ts

import { Unit } from '@fugitive/interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, enum: ['PROCESSED_GOOD', 'MERCHANDISE'] })
  productType: string;

  @Prop({ type: Number, default: 0 })
  bulkStock: number;

  @Prop({ required: true, enum: Object.values(Unit), default: Unit.ITEM })
  bulkStockUnit: Unit;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
