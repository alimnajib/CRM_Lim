import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Perusahaan } from '../schema/perusahaan.schema';
import { Model } from 'mongoose';

@Injectable()
export class PerusahaanService {
  constructor(
    @InjectModel(Perusahaan.name)
    private perusahaanModel: Model<Perusahaan>,
  ) {}

  async savePerusahaan(): Promise<any> {
    try {
      const perusahaan = {
        namaPerusahaan: 'PT. LIM CRM',
        namaPemilik: 'Muh. Alim Najib ks',
        namaBisnis: 'Jual Flashdisk',
        alamat: 'Jl. Raya No. 123, Kota Depan',
        email: 'limcrm@gmail.com',
      };
      await new this.perusahaanModel(perusahaan).save();
      return perusahaan;
    } catch (error) {
      console.error(error);
    }
  }

  async email(email: string): Promise<any> {
    return await this.perusahaanModel.findOne({ email });
  }
}
