import {HeaderPlus} from "@/components/Plus/Header/Header.tsx";
import './Plus.scss';
import {PlusData} from "@/components/Plus/PlusData/PlusData.tsx";

export default function Plus() {
    return (
        <div className="p-4 plus">
            <HeaderPlus/>
            <PlusData/>
        </div>
    );
}