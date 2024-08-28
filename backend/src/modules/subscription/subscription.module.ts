import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { Subscription } from './subscription.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Subscription, User])],
  providers: [SubscriptionService],
  controllers: [SubscriptionController],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
