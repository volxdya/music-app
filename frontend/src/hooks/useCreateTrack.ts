import {useToast} from "@/components/ui/use-toast.ts";
import {FormEvent, useEffect} from "react";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import axios, {AxiosError} from "axios";
import user from "@/store/user.ts";

export const useCreateTrack = () => {
    const {toast} = useToast();

    useEffect(() => {
        user.getUserData();


        console.log("use");
    }, []);

    const handleSubmitTrack = async (e: FormEvent, title: string, avatarUrl: string, trackUrl: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/track/create`, {
            title: title,
            avatarUrl: avatarUrl,
            authorId: user.userData.id,
            trackUrl: trackUrl,
            isTrack: true
        }).then((resp) => {
            console.log(resp.data);

            toast({
                title: "Вы успешно создали трек",
                description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
            });

            (e.target as HTMLFormElement).reset();

            user.getMe();

            console.log("use");
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

    return {handleSubmitTrack}
}