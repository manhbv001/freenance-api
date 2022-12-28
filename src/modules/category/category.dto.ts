import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ECategoryType } from 'src/common/enums/CategoryType.enum';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsNumber()
  type: ECategoryType;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  symbol_url: string;

  @IsOptional()
  @IsNumber()
  budget: number;

  @IsString()
  groupId: string;
}
