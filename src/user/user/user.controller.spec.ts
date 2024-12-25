import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
// import http mock
import * as httpMock from 'node-mocks-http';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hello', async () => {
    const response = await controller.sayHello('John', 'Doe');
    expect(response).toBe('Hello John Doe');
  });

  it('should can view template', () => {
    const response = httpMock.createResponse();
    controller.viewHello('John', response);

    expect(response._getRenderView()).toBe('index.html');
    expect(response._getRenderData()).toEqual({
      title: 'Template Engine',
      name: 'John',
    });
  });
});
