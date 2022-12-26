import {
  IsDate,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString
} from 'class-validator';
import { ECategoryType } from 'src/common/enums/CategoryType.enum';

export class CreateTransactionDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNumberString()
  type: ECategoryType;

  @IsString()
  @IsOptional()
  note: string;

  @IsDate()
  @IsOptional()
  timestamp: Date;

  @IsString()
  categoryId: string;
}
