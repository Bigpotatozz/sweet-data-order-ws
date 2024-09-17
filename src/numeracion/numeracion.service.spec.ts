import { Test, TestingModule } from '@nestjs/testing';
import { NumeracionService } from './numeracion.service';

describe('NumeracionService', () => {
  let service: NumeracionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumeracionService],
    }).compile();

    service = module.get<NumeracionService>(NumeracionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
