import './Collection.scss';
import user from "@/store/user.ts";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {CollectionForAuthors} from "@/components/Collection/CollectionForAuthors/CollectionForAuthors.tsx";
import {CollectionForUsers} from "@/components/Collection/CollectionForUsers/CollectionForUsers.tsx";

export const Collection = observer(() => {

    useEffect(() => {
        user.getUserData();
        user.getMe();
    }, []);

    if (user.me.isUser) {
        return (
            <CollectionForUsers/>
        );
    }

    return (
        <CollectionForAuthors/>
    )
});