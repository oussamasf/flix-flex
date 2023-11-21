import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { SeriesModule as BackofficeSeriesModule } from '../../backoffice/series/series.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [BackofficeSeriesModule, HttpModule],
})
export class SeriesModule {}
