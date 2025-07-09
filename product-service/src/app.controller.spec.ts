import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getProduct: jest
              .fn()
              .mockReturnValue([
                { id: 1, name: 'RAM Memory', type: 'hardware' },
              ]),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getProduct', () => {
    it('should return products array', () => {
      const result = [{ id: 1, name: 'RAM Memory', type: 'hardware' }];
      expect(appController.getProduct()).toEqual(result);
      expect(appService.getProduct).toHaveBeenCalled();
    });
  });
});
