import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Pelanggan extends Document {
  @ApiProperty({ required: true, example: 'John Mouse' })
  @Prop({ required: true })
  namaLengkap: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, lowercase: true, trim: true })
  email: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, trim: true })
  noHp: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, trim: true })
  password: string;

  //keterangan tidak dapat di gunakan karena pelanggan belum login, hanya untuk menyimpan data pelanggan saja
  //isActivated tidak di gunakan karena pelanggan belum di sediakan akses login, hanya untuk menyimpan data pelanggan saja
  //password tidak di gunakan karena tidak di buatkan akses login, hanya untuk menyimpan data pelanggan saja
}

export const pelangganSchema = SchemaFactory.createForClass(Pelanggan);
pelangganSchema.index(
  { email: 1 },
  { unique: true, partialFilterExpression: { isAccepted: false } },
);
