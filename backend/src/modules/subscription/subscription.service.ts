import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubscriptionDto } from './dto/CreateSubscriptionDto';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Subscription } from './subscription.model';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscription)
    private readonly subscriptionRepository: typeof Subscription,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async create(dto: CreateSubscriptionDto) {
    return this.subscriptionRepository.create(dto);
  }

  async getAll() {
    const subscriptions: Subscription[] =
      await this.cacheManager.get('subscriptions');

    if (!subscriptions) {
      const subscriptions: Subscription[] =
        await this.subscriptionRepository.findAll();

      await this.cacheManager.set('subscriptions', subscriptions);

      return subscriptions;
    }

    return subscriptions;
  }

  async getById(subscriptionId: number) {
    const subscription: Subscription = await this.cacheManager.get(
      `subscription/${subscriptionId}`,
    );

    if (!subscription) {
      const subscription: Subscription =
        await this.subscriptionRepository.findOne({
          where: { id: subscriptionId },
        });

      await this.cacheManager.set(
        `subscription/${subscriptionId}`,
        subscription,
      );

      return subscription;
    }

    return subscription;
  }
}
