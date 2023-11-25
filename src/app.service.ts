import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuid } from 'uuid';
import { ResponseReportDto } from './dtos/report.dto';

interface ReportData {
  amount: number;
  source: string;
}
interface UpdateReportData {
  amount?: number;
  source?: string;
}
@Injectable()
export class AppService {
  getAllReports(type: ReportType): ResponseReportDto[] {
    return data.report.filter((report) => report.type === type);
  }
  getReportById(type: ReportType, id: string): ResponseReportDto {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }
  createReport(
    type: ReportType,
    { amount, source }: ReportData,
  ): ResponseReportDto {
    const newReport = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
  updateReport(
    type: ReportType,
    id: string,
    body: UpdateReportData,
  ): ResponseReportDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return data.report[reportIndex];
  }
  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
  }
}
