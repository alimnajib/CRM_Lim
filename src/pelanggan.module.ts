import { Module } from '@nestjs/common';
import { PelangganService } from './pelanggan/sevices/pelanggan.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Pelanggan,
  pelangganSchema,
} from './pelanggan/schema/pelanggan.schema';
import { PelangganController } from './pelanggan/controller/pelanggan.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pelanggan.name, schema: pelangganSchema },
    ]),
  ],
  providers: [PelangganService],
  controllers: [PelangganController],
})
export class PelangganModule {}
