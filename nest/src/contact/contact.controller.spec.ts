import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

describe('ContactController', () => {
  let controller: ContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService],
    }).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Test about GET method', () => {
    it('should return error, if there is no contact with given ID', () => {
      try {
        controller.getOneWithID(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

    it('should return error, if there is no contact with given name', () => {
      try {
        controller.search('hoya');
      } catch (e) {
        expect(e.message).toEqual('Not found contact with name hoya');
      }
    });
  });

  describe('Test about PATCH method', () => {
    it('should return error, if there is no contact with given name', () => {
      try {
        controller.patch(1, { name: 'kim' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
