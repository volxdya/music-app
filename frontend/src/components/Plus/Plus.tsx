import {HeaderPlus} from "@/components/Plus/Header/Header.tsx";
import './Plus.scss';
import {PlusData} from "@/components/Plus/PlusData/PlusData.tsx";
import {getItem} from "@/utils/localStorage.ts";

export default function Plus() {
    return (
        <>
            {getItem("token") ? (
                <div className="p-4 plus">
                    <HeaderPlus/>
                    <PlusData/>
                </div>
            ): (
                <div>Нет токена</div>
            )}
        </>
    );
}