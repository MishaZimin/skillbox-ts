/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, useState, useEffect } from "react";

import { UserCards } from "../../widgets/user-card/user-cards";
import { Search } from "../../widgets/search/search";
// import { MyProvider } from "../../features/context/my-provider";
import { useNavigate } from "react-router-dom";
import { RegBtn } from "../../features/reg-btn/reg-btn";
import { ProfileBtn } from "../../features/profile-btn/profile-btn";

export const HomePage: FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        {token ? (
          <>
            <ProfileBtn />
            <div className="w-[60%] mx-auto mt-12">
              <Search />
            </div>
            <div className="w-[60%] mx-auto mt-2 mb-12">
              <UserCards />
            </div>
          </>
        ) : (
          <div className="w-[60%] mx-auto mt-12">
            <p className="mb-8 text-center">зарегистрируйтесь</p>
            <div className="flex justify-center">
              <RegBtn />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
