import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwthelperService } from 'src/jwthelper/services/jwthelper.service';
import { PelangganService } from 'src/pelanggan/sevices/pelanggan.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtModuleService: JwthelperService,
    private pelangganService: PelangganService,
  ) {}

  async login(
    loginPayload: LoginDto,
    response: Response,
    request: Request,
  ): Promise<object> {
    const email = loginPayload.email;
    try {
      const userLogin = await this.pelangganService.validateData(loginPayload);
      if (userLogin) {
        const jwtToken = await this.jwtModuleService.createUserKey(userLogin);
        return {
          jwtToken,
        };
      }
      throw new UnauthorizedException('Email atau password salah');
    } catch (error) {
      throw error;
    }
  }
}
