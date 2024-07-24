import axios from "axios";

export const getUserData = () => {
    const getUserDataFn = async(login: string) => {
        axios.get(`http://localhost:3010/user/get_one/${login}`).then((res) => {
            return res.data;
        }).catch((err) => {
            return err;
        });
    }

    return {getUserDataFn};
}