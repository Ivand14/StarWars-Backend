import * as cron from 'node-cron';

import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name);

    scheduleJob(cronTime: string, jobName: string, callback: () => Promise<void>) {
        this.logger.log(`Scheduling job "${jobName}" with cron time: ${cronTime}`);
        cron.schedule(cronTime, async () => {
        this.logger.log(`Job "${jobName}" started.`);
        await callback();
        this.logger.log(`Job "${jobName}" completed.`);
        });
    }
}
