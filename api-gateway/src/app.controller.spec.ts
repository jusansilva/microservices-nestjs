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
            getHello: jest.fn().mockReturnValue('Hello World!'),
            getProducts: jest
              .fn()
              .mockResolvedValue([
                { id: 1, name: 'RAM Memory', type: 'hardware' },
              ]),
            getUsers: jest
              .fn()
              .mockResolvedValue([{ id: 1, name: 'John Doe' }]),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getProducts', () => {
    it('should return products array', async () => {
      const result = [{ id: 1, name: 'RAM Memory', type: 'hardware' }];
      await expect(appController.getProducts()).resolves.toEqual(result);
      expect(appService.getProducts).toHaveBeenCalled();
    });
  });

  describe('getUsers', () => {
    it('should return users array', async () => {
      const result = [{ id: 1, name: 'John Doe' }];
      await expect(appController.getUsers()).resolves.toEqual(result);
      expect(appService.getUsers).toHaveBeenCalled();
    });
  });
});
