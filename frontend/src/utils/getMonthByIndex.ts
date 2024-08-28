// Самописная функция для склонения месяцев
export const getMonthByIndex = (index: number): string => {
    let month: string = "";

    switch (index) {
        case 1: month = "января"; break;
        case 2: month = "февраля"; break;
        case 3: month = "марта"; break;
        case 4: month = "апреля"; break;
        case 5: month = "мая"; break;
        case 6: month = "июня"; break;
        case 7: month = "июля"; break;
        case 8: month = "августа"; break;
        case 9: month = "сентября"; break;
        case 10: month = "октября"; break;
        case 11: month = "ноября"; break;
        case 12: month = "декабря"; break;
    }

    return month;
}