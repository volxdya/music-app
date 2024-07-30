import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";
import './CollectionForAuthors.scss';
import {AlbumCard} from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import {Modal} from "@/components/Modal/Modal.tsx";
import {useEffect, useState} from "react";
import {onChange} from "@/utils/onChange.ts";
import {useCreateTrack} from "@/hooks/useCreateTrack.ts";
import {useCreateAlbum} from "@/hooks/useCreateAlbum.ts";
import user from "@/store/user.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";
import {CarouselItem} from "@/components/ui/carousel.tsx";
import {CarouselScroll} from "@/components/CarouselScroll/CarouselScroll.tsx";
import {CircleCard} from "@/ui/Cards/CircleCard/CircleCard.tsx";
import {Link} from "react-router-dom";
import {ITrack} from "@/types/ITrack.ts";
import {IAlbum} from "@/types/IAlbum.ts";
import {getStringDate} from "@/utils/getStringDate.ts";
import {UploadDropzone} from "@bytescale/upload-widget-react";

export function CollectionForAuthors() {

    const [titleTrack, setTitleTrack] = useState("");
    const [titleAlbum, setTitleAlbum] = useState("");
    const [avatarUrlTrack, setAvatarUrlTrack] = useState("");
    const [avatarUrlAlbum, setAvatarUrlAlbum] = useState("");

    const {handleSubmitTrack} = useCreateTrack();
    const {handleSubmitAlbum} = useCreateAlbum();

    useEffect(() => {
        user.getUserData();
        user.getMe();
    }, []);


    const options = {
        apiKey: "public_W142iiV2YrUy17pt29Wuyzxdrpe6", // This is your API key.
        maxFileCount: 1,
        showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
        styles: {
            colors: {
                primary: "#bb0a39"
            }
        },
    };

    return (
        <>
            <Link to={`/tracks/get_by_authorId/${user.userData.id}/true`}>
                <NavigationText text="Ваши популярные треки"/>
            </Link>
            <div className="mt-4 row g-0 d-flex">
                <div className="col-8">
                    {user.me.tracks && (
                        <>
                            {user.me.tracks.slice(0, 5).map((item: ITrack) => (
                                <TrackCard title={item.title} author={user.userData.login} id={item.id} img={item.avatarUrl}/>
                            ))}
                        </>
                    )}
                </div>
                <div className="col-4 px-5">
                    <h1 className="realese">Недавний релиз</h1>
                    <div className="mt-3">
                        <AlbumCard author="whole" title="2 DAYS NO LEAN" year="2021"/>
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
                    <form className="mx-3 me-3" onSubmit={(e) => {
                        handleSubmitTrack(e, titleTrack, avatarUrlTrack);
                        setAvatarUrlTrack("");
                    }}>
                        <div>
                            <input type="text" placeholder="Название" className="mt-2"
                                   onChange={onChange(setTitleTrack)}/>


                            <UploadDropzone
                                options={options}
                                onUpdate={({uploadedFiles}) => setAvatarUrlTrack(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                                width="600px"
                                height="375px"
                            />


                            <label className="input-file mt-3">
                                <input type="file" name="file"/>
                                <span>Выберите трек</span>
                            </label>

                            <button className="add-track w-100 mt-5">Добавить</button>
                        </div>
                    </form>

                }
            />

            <div className="mt-5">
                <NavigationText text="Ваши популярные альбомы"/>
                <div className="mt-4">
                    {user.me.albums && (
                        <CarouselScroll content={
                            <>
                                {user.me.albums.map((item: IAlbum) => (
                                    <CarouselItem className="basis-1/7">
                                        <AlbumCard title={item.title} author={user.userData.login}
                                                   year={getStringDate(item.createdAt, "YYYY")}/>
                                    </CarouselItem>
                                ))}
                            </>
                        }/>
                    )}
                </div>
                <Modal
                    trigger={
                        <div className="d-flex justify-content-center">
                            <button className="add-track mt-20 mb-20 w-25">Добавить альбом</button>
                        </div>
                    }
                    content={
                        <form className="me-3 mx-3" onSubmit={(e) => {
                            setAvatarUrlAlbum("");
                            handleSubmitAlbum(e, titleAlbum, avatarUrlAlbum)}
                        }>
                            <input type="text" placeholder="Название" className="mt-2"
                                   onChange={onChange(setTitleAlbum)} title={titleAlbum}/>

                            <UploadDropzone
                                options={options}
                                onUpdate={({uploadedFiles}) => setAvatarUrlAlbum(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                                width="600px"
                                height="375px"
                            />

                            <label className="input-file mt-3">
                                <input type="file" name="file"/>
                                <span>Выберите треки</span>
                            </label>

                            <button className="add-track w-100 mt-5">Добавить</button>
                        </form>
                    }
                />

                <NavigationText text="Похожие исполнители"/>

                <div className="mt-4">
                    <CarouselScroll content={
                        <>
                            <CarouselItem className="basis-1/7">
                                <CircleCard title="Heronwater" otherText="Исполнитель"/>
                            </CarouselItem>
                        </>
                    }/>
                </div>
            </div>
        </>
    );
}