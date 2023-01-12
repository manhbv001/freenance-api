import { CategoryService } from '../category/category.service';
import { User } from '../user/user.entity';

export class ReportService {
  constructor(private categoryService: CategoryService) {}
  public async categoriesReport(authUser: User) {
    return this.categoryService.crea;
  }
}
