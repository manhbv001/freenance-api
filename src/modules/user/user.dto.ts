import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullname: string;

  @IsEmail({}, { message: 'Email không hợp lệ!' })
  email: string;

  @IsString({ message: 'Tên đăng nhập không hợp lệ!' })
  username: string;

  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải dài hơn 6 ký tự.' })
  password: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  date_of_birth: Date;

  @IsNumberString()
  type: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  avatar_url: string;
}
