/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, useState, useEffect } from "react";

import { UserCards } from "../../components/user-cards/user-cards";
import { Search } from "../../components/search/search";
import { ProfileBtn } from "../../components/btn/profile-btn";
import { WelcomeLogIn } from "../../components/welcome-log-in/welcome-log-in";

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
          <WelcomeLogIn />
        )}
      </div>
    </>
  );
};
