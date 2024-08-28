import { removeItem } from "@/utils/localStorage.ts";

// Функция для логаута
export const logOut = () => {
  removeItem("token");

  window.location.reload();
};
