import axios, {AxiosError} from "axios";
import user from "@/store/user.ts";
import {getItem} from "@/utils/localStorage.ts";
import {API_PATH} from "@/api";
import {toast} from "@/components/ui/use-toast.ts";

export const createTrack = async (title: string, genreId: number    ) => {
    await axios
        .post(
            `${API_PATH}/track/create`,
            {
                title: title,
                userId: user.userData.id,
                isTrack: true,
                trackData: {
                    accountId: "avatarUrl[0].accountId",
                    filePathAvatar: "avatarUrl[0].filePath",
                    fileUrlAvatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl0Ftd_hF5Cyemo6wzLip7RMRK4ov97mKLA&s",
                    filePathMP3: "trackUrl[0].filePath",
                    fileUrlMP3:
                        "https://elmanana.ru/stream/mym/aHR0cHM6Ly9tb29zaWMubXkubWFpbC5ydS9maWxlLzE1YzE4OTk5YTY4MTZkNTZjZmRlNzU2MDhlNzBiMzNiLm1wMw==z ",
                },
                genreId: genreId,
            },
            {
                headers: {
                    Authorization: `Bearer ${getItem("token")}`,
                },
            },
        )
        .then((resp) => {
            toast({
                title: "Вы успешно создали трек",
                description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
            });

            user.getMe();
        })
        .catch((err: AxiosError) => {
            console.log(err);

            if (err.response) {
                toast({
                    title: `${err.message}`,
                    description: `${err.message} ${err.status} HTTP REQUEST`,
                });
            }
        });
}