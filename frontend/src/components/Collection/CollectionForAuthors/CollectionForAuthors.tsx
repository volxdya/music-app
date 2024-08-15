import "./CollectionForAuthors.scss";
import { useEffect } from "react";
import user from "@/store/user.ts";
import { TracksAuthor } from "@/components/Collection/CollectionForAuthors/Tracks/TracksAuthor.tsx";
import { LastRelease } from "@/components/Collection/CollectionForAuthors/LastRelease/LastRelease.tsx";
import { AddTrack } from "@/components/Collection/CollectionForAuthors/Add/AddTrack.tsx";
import { AlbumsAuthor } from "@/components/Collection/CollectionForAuthors/Albums/AlbumsAuthor.tsx";
import { SimilarAuthors } from "@/components/Collection/CollectionForAuthors/SimilarAuthors/SimilarAuthors.tsx";
import { AddAlbum } from "@/components/Collection/CollectionForAuthors/Add/AddAlbum.tsx";

export function CollectionForAuthors() {
  useEffect(() => {
    user.getMe();
  }, []);
  
  return (
    <>
      <div className="row g-0 d-flex">
        <TracksAuthor />
        <LastRelease />
      </div>

      <AddTrack />

      <AlbumsAuthor />
      <AddAlbum />

      <SimilarAuthors />
    </>
  );
}
