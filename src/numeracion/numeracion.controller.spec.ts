import { Test, TestingModule } from '@nestjs/testing';
import { NumeracionController } from './numeracion.controller';
import { NumeracionService } from './numeracion.service';

describe('NumeracionController', () => {
  let controller: NumeracionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeracionController],
      providers: [NumeracionService],
    }).compile();

    controller = module.get<NumeracionController>(NumeracionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
