import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Gateway')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint de teste' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  @ApiOperation({ summary: 'Lista todos os produtos' })
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('users')
  @ApiOperation({ summary: 'Lista todos os usuários' })
  getUsers() {
    return this.appService.getUsers();
  }
}
