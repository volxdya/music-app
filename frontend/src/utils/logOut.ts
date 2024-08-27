import { removeItem } from "@/utils/localStorage.ts";

export const logOut = () => {
  removeItem("token");

  window.location.reload();
};
