import { EUserType } from '../enums/UserType.enum';

export interface IJwtPayload {
  id: string;
  email: string;
  type: EUserType;
}
