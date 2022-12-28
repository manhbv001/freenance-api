import { FindOneOptions, Repository } from 'typeorm';
import { Response, SuccessResponse } from '../utils/Response';

export abstract class BaseService<T> {
  protected readonly repository: Repository<T>;
  protected readonly user;

  constructor(repo: Repository<T>) {
    this.repository = repo;
  }

  async createOne(payload: any): Promise<Response<T>> {
    const rs = await this.repository.save(payload);

    return new SuccessResponse(rs);
  }

  async findOne(payload: FindOneOptions<T>): Promise<Response<T>> {
    const rs = await this.repository.findOne(payload);

    return new SuccessResponse(rs);
  }

  async finAll(payload: FindOneOptions<T>): Promise<Response<T[]>> {
    const rs = await this.repository.find(payload);

    return new SuccessResponse(rs);
  }

  async updateOne(id: string, payload: T): Promise<Response<T>> {
    const rs = await this.repository.save(payload);

    return new SuccessResponse(rs);
  }
}
