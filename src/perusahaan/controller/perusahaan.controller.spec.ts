import { Test, TestingModule } from '@nestjs/testing';
import { PerusahaanController } from './perusahaan.controller';

describe('PerusahaanController', () => {
  let controller: PerusahaanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerusahaanController],
    }).compile();

    controller = module.get<PerusahaanController>(PerusahaanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
