import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Customer } from './customer.schema';
import { Product } from './product.schema';

export type SaleDocument = HydratedDocument<Sale>;

@Schema({ _id: false })
class SaleItem {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true })
  productId: Product;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  priceAtSale: number;
}
const SaleItemSchema = SchemaFactory.createForClass(SaleItem);

@Schema({ timestamps: true })
export class Sale {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true })
  customerId: Customer;

  @Prop({ type: [SaleItemSchema], required: true })
  items: SaleItem[];

  @Prop({ required: true, enum: ['Pending', 'Completed', 'Refunded'], default: 'Pending' })
  status: string;

  @Prop({ default: Date.now })
  saleDate: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
