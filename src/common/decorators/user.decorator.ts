import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IAuthUser } from '../interfaces/auth-user.interface';

export const GetUser = createParamDecorator(
  (key: string, context: ExecutionContext): IAuthUser => {
    const request: Express.Request = context.switchToHttp().getRequest();
    const user = request.user;
    return key ? user?.[key] : user;
  },
);
