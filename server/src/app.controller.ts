import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import IProject from './model/IProject';

@Controller('projects')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): IProject[] {
    return this.appService.getAll();
  }

  @Get(':name')
  getOneByName(@Param('name') name: string): IProject {
    return this.appService.getOneByName(name);
  }
}
