/* eslint-disable prettier/prettier */
import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from "class-transformer";
import { ReportType } from 'src/data';
export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsString()
  @IsNotEmpty()
  source: string;
}
export class UpdateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}
export class ResponseReportDto {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    @Exclude()
    updated_at: Date;
    type: ReportType;
}
