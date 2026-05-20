import { Test, TestingModule } from '@nestjs/testing';
import { PelangganService } from './pelanggan.service';
import { beforeEach, describe, it } from 'node:test';

describe('PelangganService', () => {
  let service: PelangganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelangganService],
    }).compile();

    service = module.get<PelangganService>(PelangganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
