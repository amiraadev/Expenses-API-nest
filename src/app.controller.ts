import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
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
