import {Settings} from "@/icons/Settings.tsx";
import uniqid from "uniqid";
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";

export function SettingsPlayerDropdown() {
    return (
        <Dropdown
            trigger={<Settings/>}

            content={
                <div className="py-2 px-1">
                    <h1 className="text-[24px] font-medium mx-2">Настройки звука</h1>
                    <div className="mt-3">
                        <div className="mt-1 menu-item" key={uniqid()}>
                            <div className="d-flex align-items-center gap-3 text-[14px]">
                                Высокое качество звука
                            </div>
                        </div>

                        <div className="mt-1 menu-item" key={uniqid()}>
                            <div className="d-flex align-items-center gap-3 text-[14px]">
                                Оптимальное качество звука
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}