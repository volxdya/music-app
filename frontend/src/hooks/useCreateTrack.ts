import {useToast} from "@/components/ui/use-toast.ts";
import {FormEvent, useEffect} from "react";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import axios, {AxiosError} from "axios";
import user from "@/store/user.ts";

export const useCreateTrack = () => {
    const {toast} = useToast();

    useEffect(() => {
        user.getUserData();
    }, []);

    const handleSubmitTrack = async (e: FormEvent, title: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/track/create`, {
            title: title,
            trackUrl: "",
            avatarUrl: "",
            authorId: user.userData.id,
            isTrack: true
        }).then((resp) => {
            console.log(resp.data);

            toast({
                title: "Вы успешно создали трек",
                description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
            });

            (e.target as HTMLFormElement).reset();

            user.getMe();
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