import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly age: number;

  @IsString({ each: true })
  readonly email: string[];
}
