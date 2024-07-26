import {useToast} from "@/components/ui/use-toast.ts";
import {FormEvent, useEffect} from "react";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import axios, {AxiosError} from "axios";
import user from "@/store/user.ts";

export const useCreateAlbum = () => {
    const {toast} = useToast();

    useEffect(() => {
        user.getUserData();
    }, []);

    const handleSubmitAlbum = async (e: FormEvent, title: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/album/create`, {
            title: title,
            trackUrl: "",
            avatarUrl: "",
            authorId: user.userData.id,
            isTrack: true
        }).then((resp) => {
            console.log(resp);

            toast({
                title: "Вы успешно создали альбом",
                description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
            });

            user.getMe();

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

    return {handleSubmitAlbum}
}