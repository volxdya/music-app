import dayjs from 'dayjs';

export function getStringDate(date: Date, format: string): string {
    return dayjs(date).format(format);
}