import {Dots} from "@/icons/Dots.tsx";
import {SecondHeart} from "@/icons/Hearts/SecondHeart.tsx";
import {ISidebar} from "@/types/ISidebar.ts";
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";
import {BreakHeart} from "@/icons/Hearts/BreakHeart.tsx";

export function MainPlayerDropdown() {

    const sidebarItems: ISidebar[] = [
        {
            title: "Нравится",
            component: <SecondHeart/>
        },
        {
            title: "Не нравится",
            component: <BreakHeart/>
        },
    ];

    return (

        <Dropdown
            trigger={<Dots/>}

            content={
                <div>
                    {sidebarItems.map((item: ISidebar) => (
                        <div className="mt-1 menu-item">
                            <div className="d-flex align-items-center gap-3">
                                {item.component}
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            }
        />
    )
}