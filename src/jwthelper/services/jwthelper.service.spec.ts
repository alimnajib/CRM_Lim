import { Test, TestingModule } from '@nestjs/testing';
import { JwthelperService } from './jwthelper.service';

describe('JwthelperService', () => {
  let service: JwthelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwthelperService],
    }).compile();

    service = module.get<JwthelperService>(JwthelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
