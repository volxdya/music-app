import {Settings} from "@/icons/Settings.tsx";
import uniqid from "uniqid";
import {Dropdown} from "@/components/Dropdown/Dropdown.tsx";

export function SettingsPlayerDropdown() {
    return (
        <Dropdown
            trigger={<Settings/>}

            content={
                <div>
                    <div className="mt-1 menu-item" key={uniqid()}>
                        <div className="d-flex align-items-center gap-3">
                            Высокое качество звука
                        </div>
                    </div>

                    <div className="mt-1 menu-item" key={uniqid()}>
                        <div className="d-flex align-items-center gap-3">
                            Оптимальное качество звука
                        </div>
                    </div>
                </div>
            }
        />
    );
}