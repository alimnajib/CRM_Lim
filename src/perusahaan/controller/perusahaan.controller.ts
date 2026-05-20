import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PerusahaanService } from '../services/perusahaan.service';

@ApiBearerAuth('access_token')
@ApiTags('perusahaan')
@Controller('perusahaan')
export class PerusahaanController {
  constructor(private perusahaanService: PerusahaanService) {}

  @Post('/simpan')
  async savePerusahaan(): Promise<any> {
    return await this.perusahaanService.savePerusahaan();
  }

  @Get('/id:email')
  async getEmail(@Param('email') email: string): Promise<any> {
    return await this.perusahaanService.email(email);
  }

  @Put('/update')
  async updateCari(@Param('email') email: string): Promise<any> {
    return email;
  }

  @Delete('/hapus')
  async hapus(@Param('email') email: string): Promise<any> {
    return email;
  }
}
