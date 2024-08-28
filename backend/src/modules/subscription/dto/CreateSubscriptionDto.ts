export class CreateSubscriptionDto {
  readonly title: string;

  // Длительность в месяцах
  readonly duration: number;

  readonly price: number;
}
