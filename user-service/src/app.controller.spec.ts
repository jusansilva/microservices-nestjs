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
            getUsers: jest.fn().mockReturnValue([{ id: 1, name: 'John Doe' }]),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getUsers', () => {
    it('should return users array', () => {
      const result = [{ id: 1, name: 'John Doe' }];
      expect(appController.getUsers()).toEqual(result);
      expect(appService.getUsers).toHaveBeenCalled();
    });
  });
});
