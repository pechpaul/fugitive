import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Address {
  @Prop()
  type?: string; // e.g., 'Shipping', 'Billing'

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  postcode: string;

  @Prop({ required: true })
  country: string;
}
export const AddressSchema = SchemaFactory.createForClass(Address);
