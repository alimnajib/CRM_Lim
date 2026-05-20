import { Test, TestingModule } from '@nestjs/testing';
import { PerusahaanService } from './perusahaan.service';

describe('PerusahaanService', () => {
  let service: PerusahaanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerusahaanService],
    }).compile();

    service = module.get<PerusahaanService>(PerusahaanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
