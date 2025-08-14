import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';
import { Packaging } from './packaging.schema';
import { Unit } from '@fugitive/interfaces';

export type ItemDocument = HydratedDocument<Item>;

@Schema({ timestamps: true })
export class Item {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true })
  productId: Product;

  @Prop({ required: true })
  name: string; // e.g., "50g Bag"

  @Prop({ required: true, unique: true })
  sku: string; // e.g., "CHAI-50G"

  @Prop({ required: true })
  salePrice: number;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  attributes: {
    weight?: number;
    unit?: Unit;
    size?: string;
    color?: string;
  };

  @Prop({
    type: [
      { packagingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packaging' }, quantity: Number },
    ],
    default: [],
  })
  packagingItems: { packagingId: Packaging; quantity: number }[];

  @Prop({ type: Number, default: 0 })
  readyForSaleStock: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
