import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Supplier } from './supplier.schema';
import { Ingredient } from './ingredient.schema';

export type PurchaseOrderDocument = HydratedDocument<PurchaseOrder>;

@Schema({ _id: false })
class OrderItem {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true })
  ingredientId: Ingredient;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  costPerUnit: number; // Price at the time of order
}
const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: true })
export class PurchaseOrder {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true })
  supplierId: Supplier;

  @Prop({ type: [OrderItemSchema], required: true })
  items: OrderItem[];

  @Prop({ required: true })
  totalCost: number;

  @Prop({ required: true, enum: ['Placed', 'Shipped', 'Received', 'Cancelled'], default: 'Placed' })
  status: string;

  @Prop()
  orderDate: Date;

  @Prop()
  receivedDate?: Date;
}

export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);
