import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Sale } from './recipe.schema';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ _id: false })
class Address {
  @Prop({ required: true, enum: ['Shipping', 'Billing'] })
  type: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  postcode: string;

  @Prop({ required: true })
  country: string;
}
const AddressSchema = SchemaFactory.createForClass(Address);

@Schema({ timestamps: true })
export class Customer {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({
    type: { address: { type: String, unique: true, required: true }, isVerified: Boolean },
    required: true,
  })
  email: {
    address: string;
    isVerified: boolean;
  };

  @Prop()
  phone?: string;

  @Prop({ type: [AddressSchema], default: [] })
  addresses: Address[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sale' }], default: [] })
  orderHistory: Sale[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
