import uniqid from "uniqid";
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";
import {Dots} from "@/icons/Dots.tsx";
import {ISidebar} from "@/types/ISidebar.ts";
import {SecondHeart} from "@/icons/Hearts/SecondHeart.tsx";
import {Note} from "@/icons/Note.tsx";
import {BreakHeart} from "@/icons/Hearts/BreakHeart.tsx";
import './DropdownTrack.scss';

export function DropdownTrack() {
    const sidebarItems: ISidebar[] = [
        {
            title: "Нравится",
            component: <SecondHeart/>
        },
        {
            title: "Добавить в плейлист",
            component: <Note/>
        },
        {
            title: "Не нравится",
            component: <BreakHeart/>
        },
    ];

    return (
        <Dropdown
            trigger={<Dots/>}
            classNames="absolute top-6 -left-24 w-max"

            content={
                <div className="">
                    {sidebarItems.map((item: ISidebar) => (
                        <div className="mt-1 menu-item" key={uniqid()}>
                            <div className="d-flex align-items-center gap-3 text-[13px]">
                                {item.component}
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            }
        />
    );
}