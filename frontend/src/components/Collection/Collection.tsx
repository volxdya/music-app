import "./Collection.scss";
import user from "@/store/user.ts";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { CollectionForAuthors } from "@/components/Collection/CollectionForAuthors/CollectionForAuthors.tsx";
import { CollectionForUsers } from "@/components/Collection/CollectionForUsers/CollectionForUsers.tsx";
import { getItem } from "@/utils/localStorage.ts";

export const Collection = observer(() => {
  useEffect(() => {
    user.getUserData();
  }, []);

  if (getItem("token")) {
    if (user.userData.isUser) {
      return <CollectionForUsers />;
    }

    return (
      <>
        <CollectionForAuthors />
        <div className="mt-5">
          <CollectionForUsers />
        </div>
      </>
    );
  }

  return (
      <div>Нет токена!</div>
  )
});
