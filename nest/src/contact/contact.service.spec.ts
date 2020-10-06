import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactService],
    }).compile();

    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Tests about Create', () => {
    it('creates and adds a contact', () => {
      const contact: CreateContactDto = {
        name: 'hoya',
        age: 18,
        email: ['abc@example.com'],
      };

      service.create(contact);
      const result = service.getOneWithName(contact.name);
      expect(result).toMatchObject(contact);
    });
  });

  describe('Tests about Read', () => {
    beforeEach(async () => {
      service.create({
        name: 'hoya',
        age: 18,
        email: ['abc@example.com'],
      });
      service.create({
        name: 'park',
        age: 30,
        email: ['def@example.com'],
      });
    });

    it('get all of the contact', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });

    it('get one of the contact with ID', () => {
      const result = service.getOneWithID(1);
      expect(result).toHaveProperty('name', 'hoya');
    });

    it('get all of the contact with name', () => {
      const result = service.getOneWithName('park');
      expect(result).toHaveProperty('name', 'park');
    });
  });

  describe('Tests about Update', () => {
    beforeEach(async () => {
      service.create({
        name: 'hoya',
        age: 18,
        email: ['abc@example.com'],
      });
      service.create({
        name: 'park',
        age: 30,
        email: ['def@example.com'],
      });
    });

    it('update all contact', () => {
      service.updateAll([
        { name: 'kim', age: 23, email: ['ghi@example.com'] },
        {
          name: 'lee',
          age: 37,
          email: ['jkl@example.com'],
        },
      ]);
      const result = service.getOneWithName('kim');
      expect(result).toHaveProperty('name', 'kim');
    });

    it('update one contact with ID', () => {
      service.updateOneWithID(1, { name: 'kim' });
      const result = service.getOneWithName('kim');
      expect(result).toHaveProperty('name', 'kim');
    });
  });

  describe('Tests about Delete', () => {
    beforeEach(async () => {
      service.create({
        name: 'hoya',
        age: 18,
        email: ['abc@example.com'],
      });
      service.create({
        name: 'park',
        age: 30,
        email: ['def@example.com'],
      });
    });

    it('deletes one contact with ID', () => {
      service.deleteOneWithID(2);
      const result = service.getAll();
      expect(result).toHaveLength(1);
    });
  });
});
