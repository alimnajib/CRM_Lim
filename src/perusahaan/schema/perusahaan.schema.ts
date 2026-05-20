import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Perusahaan extends Document {
  @ApiProperty({ required: true, example: 'John Mouse' })
  @Prop({ required: true })
  namaPerusahaan: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, lowercase: true, trim: true })
  namaPemilik: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, lowercase: true, trim: true })
  namaBisnis: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, lowercase: true, trim: true })
  alamat: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, lowercase: true, trim: true })
  email: string;
}

export const perusahaanSchema = SchemaFactory.createForClass(Perusahaan);
perusahaanSchema.index(
  { namaPerusahaan: 1 },
  { unique: true, partialFilterExpression: { isAccepted: false } },
);

//// penjelelasan singkat
// starter pack semacam kerangka dasar yg siap di gunakan.
// starter pack untuk pelanggan dan perusahaan seperti schema, servis, control ,module
// schema yg menentukan struktur data yg akan di simpan seperti nama lengkap email, nomor HP untuk pelanggan,
// dan nama perusahaan, nama bisnis, nama pemilik, email, alamat untuk perusahaan
// CRUD yaitu create untuk menyimpan data baru, read untuk mengambil data, update untuk memperbarui data, delete untuk menghapus data
// boilerplate yaitu sebuah kode yg belum sepenuhnya berfungsi, tapi sudah disiapkan untuk di gunakan, seperti
// contoh pada controller perusahaan yang sudah ada method update dan delete tapi belum di implementasikan,
// jadi masih berupa boilerplate yang siap untuk di isi dengan logika bisnis sesuai kebutuhan.
