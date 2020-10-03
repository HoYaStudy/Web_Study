import { Injectable, NotFoundException } from '@nestjs/common';
import { Contact } from './entity/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  private contacts: Contact[] = [];

  create(contactData: CreateContactDto) {
    this.contacts.push({
      id: this.contacts.length + 1,
      ...contactData,
    });
  }

  getAll(): Contact[] {
    return this.contacts;
  }

  getOneWithID(id: number): Contact {
    const contact = this.contacts.find(contact => contact.id === id);
    if (!contact) {
      throw new NotFoundException(`Not found contact with ID ${id}`);
    }
    return contact;
  }

  getOneWithName(name: string): Contact {
    const contact = this.contacts.find(contact => contact.name === name);
    if (!contact) {
      throw new NotFoundException(`Not found contact with name ${name}`);
    }
    return contact;
  }

  updateAll(updateData: CreateContactDto[]): Contact[] {
    this.contacts = [];
    updateData.map(data => {
      this.contacts.push({
        id: this.contacts.length + 1,
        ...data,
      });
    });
    return this.contacts;
  }

  updateOneWithID(id: number, updateData: UpdateContactDto) {
    const contact = this.getOneWithID(id);
    this.deleteOneWithID(id);
    this.contacts.push({ ...contact, ...updateData });
  }

  deleteOneWithID(id: number): boolean {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    return true;
  }
}
