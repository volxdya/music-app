import axios, {AxiosError} from "axios";

export const useAddToPlaylist = async (trackId: number, playlistId: number) => {

    await axios.post(`http://localhost:3010/playlist/add_track`, {
        playlistId: playlistId,
        trackId: trackId
    }).then((resp) => {
        console.log(resp.data);
    }).catch((err: AxiosError) => {
        console.log(err);
    });

}