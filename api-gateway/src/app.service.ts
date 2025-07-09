import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private userClient: ClientProxy;
  private productClient: ClientProxy;

  constructor() {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'user_queue',
        queueOptions: { durable: false },
      },
    });

    this.productClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'product_queue',
        queueOptions: { durable: false },
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<any[]> {
    return await firstValueFrom(
      this.userClient.send<any[]>({ cmd: 'get_users' }, {}),
    );
  }

  async getProducts(): Promise<any[]> {
    return await firstValueFrom(
      this.productClient.send<any[]>({ cmd: 'get_product' }, {}),
    );
  }
}
