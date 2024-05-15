/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";

import { UserCards } from "../../widgets/user-card/user-cards";
import { Search } from "../../widgets/search/search";
// import { MyProvider } from "../../features/context/my-provider";

export const HomePage: FC = () => {
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="w-[60%] mx-auto mt-12">
          <Search />
        </div>
        <div className="w-[60%] mx-auto mt-2 mb-12">
          <UserCards />
        </div>
      </div>
    </>
  );
};
