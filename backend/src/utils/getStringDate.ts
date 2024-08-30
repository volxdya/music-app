import dayjs from 'dayjs';

// Получение красивого формата даты
export function getStringDate(date: Date, format: string): string {
    return dayjs(date).format(format);
}
