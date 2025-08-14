import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Ingredient } from './ingredient.schema';

export type SupplierDocument = HydratedDocument<Supplier>;

// Sub-schema for the catalog items
@Schema({ _id: false })
class CatalogItem {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true })
  ingredientId: Ingredient;

  @Prop({ required: true })
  pricePerUnit: number;
}
const CatalogItemSchema = SchemaFactory.createForClass(CatalogItem);

// Main Supplier Schema
@Schema({ timestamps: true })
export class Supplier {
  @Prop({ required: true })
  name: string;

  @Prop({ type: { phone: String, email: String } })
  contact: {
    phone?: string;
    email?: string;
  };

  @Prop({ type: { street: String, city: String, postcode: String, country: String } })
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };

  @Prop({ type: [CatalogItemSchema], default: [] })
  catalog: CatalogItem[];
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
