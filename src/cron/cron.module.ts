import { CronService } from './cron.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CronService],
  exports:[CronService]
})
export class CronModule {}
