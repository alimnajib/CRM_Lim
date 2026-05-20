import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { PelangganInterface } from 'src/pelanggan/interface/pelanggan.interface';
import { JwtPayload } from '../interface/jwtpayload.interface';
import { Pelanggan } from 'src/pelanggan/schema/pelanggan.schema';

@Injectable()
export class JwthelperService {
  constructor(private jwtService: JwtService) {}

  async createUserKey(pelanggan: Pelanggan): Promise<string> {
    const expiresIn = '90d';
    const payload = this.userPayload(pelanggan);
    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn,
    });
    return access_token;
  }

  private userPayload(pelanggan: Pelanggan): JwtPayload {
    const payload: JwtPayload = {
      _id: pelanggan._id.toString(),
      namaLengkap: pelanggan.namaLengkap,
      email: pelanggan.email,
      noHp: pelanggan.noHp,
    };
    return payload;
  }
}
