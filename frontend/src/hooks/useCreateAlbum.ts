import { useToast } from "@/components/ui/use-toast.ts";
import { FormEvent, useEffect } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import axios, { AxiosError } from "axios";
import user from "@/store/user.ts";

export const useCreateAlbum = () => {
    const { toast } = useToast();

    useEffect(() => {
        user.getUserData();

        console.log("use");
    }, []);

    const handleSubmitAlbum = async (e: FormEvent, title: string, avatarUrl: string) => {
        stopFormBehavior(e);

        if (!user.userData.isUser) {
            await axios.post(`http://localhost:3010/album/create`, {
                title: title,
                avatarUrl: avatarUrl,
                authorId: user.userData.id,
            }).then((resp) => {
                console.log(resp);

                toast({
                    title: "Вы успешно создали альбом",
                    description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
                });

                user.getMe();

                console.log("use");

                (e.target as HTMLFormElement).reset();
            }).catch((err: AxiosError) => {
                console.log(err);

                if (err.response) {
                    toast({
                        title: `${err.message}`,
                        description: `${err.message} ${err.status} HTTP REQUEST`,
                    });
                }

                (e.target as HTMLFormElement).reset();
            });
        }
    }

    return { handleSubmitAlbum }
}