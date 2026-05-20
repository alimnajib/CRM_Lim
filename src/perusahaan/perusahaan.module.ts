import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Perusahaan, perusahaanSchema } from './schema/perusahaan.schema';
import { PerusahaanService } from './services/perusahaan.service';
import { PerusahaanController } from './controller/perusahaan.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Perusahaan.name, schema: perusahaanSchema },
    ]),
  ],
  providers: [PerusahaanService],
  controllers: [PerusahaanController],
})
export class PerusahaanModule {}
