import { SetMetadata } from '@nestjs/common';
import { ERole } from 'src/common/enums/Role.enum';

export const Roles = (...roles: ERole[]) => SetMetadata('roles', roles);
