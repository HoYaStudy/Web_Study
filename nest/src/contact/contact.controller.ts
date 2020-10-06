import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { Contact } from './entity/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() contactData: CreateContactDto) {
    return this.contactService.create(contactData);
  }

  @Get()
  getAll(): Contact[] {
    return this.contactService.getAll();
  }

  @Get('search')
  search(@Query('name') searchingName: string) {
    return this.contactService.getOneWithName(searchingName);
  }

  @Get(':id')
  getOneWithID(@Param('id') contactId: number): Contact {
    return this.contactService.getOneWithID(contactId);
  }

  @Put()
  updateAll(@Body() updateData: CreateContactDto[]) {
    return this.contactService.updateAll(updateData);
  }

  @Patch(':id')
  patch(@Param('id') contactId: number, @Body() updateData: UpdateContactDto) {
    return this.contactService.updateOneWithID(contactId, updateData);
  }

  @Delete(':id')
  delete(@Param('id') contactId: number) {
    return this.contactService.deleteOneWithID(contactId);
  }
}
