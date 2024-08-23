import { Box } from "@/icons/Box.tsx";
import "./ChangePlan.scss";
import {Boxes} from "@/icons/Boxes.tsx";

export function ChangePlan() {
  return (
      <div>
        <div className="d-flex change-plan-card gap-3 align-items-center mt-2">
          <Box/>
          <div className="data-plan">
            <p className="text-[17px] d-flex gap-2 align-items-center">
              Плюс
              <span className="text-[12px] active-plan">Активен</span>
            </p>
            <p className="text-[16px] text-neutral-400">99₽ в месяц</p>
          </div>
        </div>

        <div className="d-flex change-plan-card justify-content-between mt-2 align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <Boxes/>
            <div className="data-plan">
              <p className="text-[17px] d-flex gap-2 align-items-center">
                Плюса Больше
              </p>
              <p className="text-[16px] text-neutral-400">999₽ в год</p>
            </div>
          </div>

          <button className="change-plan-btn btn btn-primary">Перейти</button>
        </div>
      </div>
  );
}
