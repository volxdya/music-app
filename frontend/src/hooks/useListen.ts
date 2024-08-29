import axios from "axios";

export const useListen = () => {
    // Прослушивание трека (+1 к записи в БД)
    const listen = async(trackId: number) => {
        await axios.post(`http://localhost:3010/track/listen/${trackId}`);
    }

    return [listen];
}