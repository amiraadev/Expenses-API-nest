import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports() {
    return [];
  }
  @Get(':id')
  getReportById() {
    return {};
  }
  @Post()
  createReport() {
    return 'created';
  }
  @Put(':id')
  updateReport() {
    return 'updated';
  }
  @Delete(':id')
  deleteDelete() {
    return 'deleted';
  }
}
