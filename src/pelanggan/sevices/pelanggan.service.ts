import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pelanggan } from '../schema/pelanggan.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class PelangganService {
  constructor(
    @InjectModel(Pelanggan.name)
    private pelangganModel: Model<Pelanggan>,
  ) {}

  async savePelanggan(): Promise<any> {
    try {
      const pelanggan = {
        namaLengkap: 'arianysyah akbar',
        email: 'akbar@email.com',
        noHp: '08123456789',
        isActivated: true,
        password: '123',
        keterangan: 'pelanggan baru',
      };
      await new this.pelangganModel(pelanggan).save();
      return pelanggan;
    } catch (error) {
      console.error(error);
    }
  }

  async getDataNoHpPelanggan(noHp: string): Promise<any> {
    return await this.pelangganModel.findOne({ noHp }).exec();
  }

  async getSemua(): Promise<any> {
    return await this.pelangganModel.find().exec();
  }

  async validateData(loginPayload: LoginDto): Promise<Pelanggan> {
    try {
      const pelanggan = await this.pelangganModel
        .findOne({ email: loginPayload.email })
        .exec();
      if (
        !pelanggan ||
        !(await this.checkPassword(loginPayload.password, pelanggan.password))
      ) {
        throw new HttpException(
          {
            statusCode: 400,
            message: 'Email atau password salah.',
            error: 'Bad Gateway',
          },
          400,
        );
      }
      return pelanggan;
    } catch (error) {
      throw error;
    }
  }

  private async checkPassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
