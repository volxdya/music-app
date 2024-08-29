import { useEffect } from "react";
import user from "@/store/user.ts";
import { observer } from "mobx-react-lite";
import "./Accounts.scss";
import uniqid from "uniqid";
import { AccountCard } from "@/ui/Cards/AccountCard/AccountCard.tsx";
import { CarouselItem } from "@/components/ui/carousel.tsx";
import { CarouselScroll } from "@/ui/CarouselScroll/CarouselScroll.tsx";
import {Link} from "react-router-dom";

const Accounts = observer(() => {
  useEffect(() => {
    user.getAllUsers();
  }, []);

  return (
    <div className="accounts flex align-items-center justify-center gap-3">
      <div className="select-account">
        <div>
          <h2 className="text-center text-[20px]">Выберите аккаунт</h2>

          <div className="mt-5">
            <div className="flex justify-center gap-3">
              <CarouselScroll
                content={
                  <>
                    {user.users.map((user, index: number) => (
                      <CarouselItem className="basis-1/7">
                        <AccountCard
                          key={uniqid()}
                          login={user.login}
                          index={index}
                        />
                      </CarouselItem>
                    ))}
                    <CarouselItem className="basis-1/7 text-[50px]">
                      +
                    </CarouselItem>
                  </>
                }
              />
            </div>
            <Link to="/auth/login">
              <div className="flex justify-center">
                <button className="mt-[45px] add-account-btn">
                  Добавить аккаунт
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Accounts;
