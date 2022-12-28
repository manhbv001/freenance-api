import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString
} from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsOptional()
  note: string;

  @IsDateString()
  @IsOptional()
  timestamp: string;

  @IsString()
  categoryId: string;
}
