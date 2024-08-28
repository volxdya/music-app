import {IUser} from "@/types/IUser.ts";

// Получение прослушиваний автора
export const getAuditions = (userData?: IUser) => {
    if (userData?.tracks) {
        const auditions: number[] = userData?.tracks.map(
            (item) => item.auditions,
        );

        return auditions.reduce((x, y) => x + y);
    }
};