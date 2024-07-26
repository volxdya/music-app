import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";
import './CollectionForAuthors.scss';
import {AlbumCard} from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import {Modal} from "@/components/Modal/Modal.tsx";
import {useEffect, useState} from "react";
import {onChange} from "@/utils/onChange.ts";
import {useCreateTrack} from "@/hooks/useCreateTrack.ts";
import {useCreateAlbum} from "@/hooks/useCreateAlbum.ts";
import user, {IAlbum, ITrack} from "@/store/user.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";

export function CollectionForAuthors() {

    const [titleTrack, setTitleTrack] = useState("");
    const [titleAlbum, setTitleAlbum] = useState("");

    const {handleSubmitTrack} = useCreateTrack();
    const {handleSubmitAlbum} = useCreateAlbum();

    useEffect(() => {
        user.getUserData();
        user.getMe();
    }, []);

    return (
        <>
            <NavigationText text="Ваши популярные треки"/>
            <div className="mt-4 row g-0 d-flex">
                <div className="col-8">
                    {user.me.tracks && (
                        <>
                            {user.me.tracks.map((item: ITrack) => (
                                <TrackCard title={item.title}/>
                            ))}
                        </>
                    )}
                </div>
                <div className="col-4 px-5">
                    <h1 className="realese">Недавний релиз</h1>
                    <div className="mt-3">
                        <AlbumCard author="whole" title="2 DAYS NO LEAN"/>
                    </div>
                </div>
            </div>

            <Modal
                trigger={
                    <div className="d-flex justify-content-center">
                        <button className="add-track mb-20 mt-20 w-25">Добавить трек</button>
                    </div>
                }
                content={
                    <form className="me-3 mx-3" onSubmit={(e) => handleSubmitTrack(e, titleTrack)}>
                        <input type="text" placeholder="Название" className="mt-2" onChange={onChange(setTitleTrack)}/>

                        <label className="input-file mt-3">
                            <input type="file" name="file"/>
                            <span>Выберите картинку</span>
                        </label>

                        <label className="input-file mt-3">
                            <input type="file" name="file"/>
                            <span>Выберите трек</span>
                        </label>

                        <button className="add-track w-100 mt-5">Добавить</button>
                    </form>

                }
            />

            <div className="mt-5">
                <NavigationText text="Ваши популярные альбомы"/>
                {user.me.albums && (
                    <div className="d-flex gap-3 mt-4">
                        {user.me.albums.map((item: IAlbum) => (
                            <AlbumCard title={item.title} author={(item.authorId).toString()}/>
                        ))}
                    </div>
                )}

                <Modal
                    trigger={
                        <div className="d-flex justify-content-center">
                            <button className="add-track mt-20 mb-20 w-25">Добавить альбом</button>
                        </div>
                    }
                    content={
                        <form className="me-3 mx-3" onSubmit={(e) => handleSubmitAlbum(e, titleAlbum)}>
                            <input type="text" placeholder="Название" className="mt-2" onChange={onChange(setTitleAlbum)} title={titleAlbum}/>

                            <label className="input-file mt-3">
                                <input type="file" name="file"/>
                                <span>Выберите картинку</span>
                            </label>

                            <label className="input-file mt-3">
                                <input type="file" name="file"/>
                                <span>Выберите треки</span>
                            </label>

                            <button className="add-track w-100 mt-5">Добавить</button>
                        </form>

                    }
                />
            </div>
        </>
    )
}