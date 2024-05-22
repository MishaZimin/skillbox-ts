/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, useState, useEffect } from "react";

import { UserCards } from "../../components/user-cards/user-cards";
import { Search } from "../../components/search/search";
import { RegBtn } from "../../components/btn/reg-btn";
import { ProfileBtn } from "../../components/btn/profile-btn";

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
          <div className="p-4 mx-auto mt-12 bg-gray-100 rounded-xl">
            <p className="mb-8 font-bold text-center">зарегистрируйтесь</p>
            <div className="flex justify-center">
              <RegBtn />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
