import { PartialType } from '@nestjs/mapped-types';
import { CreateNumeracionDto } from './create-numeracion.dto';

export class UpdateNumeracionDto extends PartialType(CreateNumeracionDto) {}
