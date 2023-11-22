import { Injectable } from '@nestjs/common';
import * as data from './data/projects.json';
import IProject from './model/IProject';

@Injectable()
export class AppService {
  getAll(): IProject[] {
    return data;
  }

  getOneByName(name: string): IProject {
    return data.find((item) => item.name === name);
  }
}
