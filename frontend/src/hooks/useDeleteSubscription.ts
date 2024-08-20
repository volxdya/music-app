import axios from "axios";

export const useDeleteSubscription = (userId: number) => {
  const deleteSubscription = async () => {
    await axios.post(`http://localhost:3010/user/delete_subscription/userId=${userId}`);
  }

  return [deleteSubscription];
};
