import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { ReportDto } from './dtos/report.dto';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: CreateReportDto, user: User) {
    const report = this.repo.create(reportDto);
    report.user = user;

    return this.repo.save(report);
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOneBy({ id: parseInt(id) });
    if (!report) throw new NotFoundException('Report not found');

    report.approved = approved;
    return this.repo.save(report);
  }

  async createEstimate(estimateDto: GetEstimateDto) {
    const report = await this.repo
      .createQueryBuilder()
      .where('LOWER(make) = :make', { make: estimateDto.make.toLowerCase() })
      .select('*')
      .getRawMany();

    return report as ReportDto[];
  }
}
