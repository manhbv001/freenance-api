import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthUser } from 'src/common/interfaces/auth-user.interface';
import { UserService } from '../user/user.service';

export class AuthService {
  constructor(
    @Inject(UserService) private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async verifyToken() {
    return 'hello';
  }

  public validateUser(email: string, password: string) {
    const user = this.userService.findOne({
      email,
      password,
    });

    return user;
  }

  public async login(payload: IAuthUser) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
