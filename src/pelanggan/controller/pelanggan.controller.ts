import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PelangganService } from '../sevices/pelanggan.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth('access_token')
@ApiTags('pelanggan')
@Controller('pelanggan')
export class PelangganController {
  constructor(private pelangganService: PelangganService) {}

  @Post('/simpan')
  async savePelanggan(): Promise<any> {
    return await this.pelangganService.savePelanggan();
  }
  @Get('/data-hp')
  async dataHp(@Query('noHp') noHp: string): Promise<any> {
    return await this.pelangganService.getDataNoHpPelanggan(noHp);
  }
  @Get('/data-semua-hp')
  async dataSemuaHp(): Promise<any> {
    return await this.pelangganService.getSemua();
  }

  // @Get('/data-hp')
  // async dataHp(noHandphone: string): Promise<string> {
  //   return await this.pelangganService.dataHp('089646579493');
  // }
}
