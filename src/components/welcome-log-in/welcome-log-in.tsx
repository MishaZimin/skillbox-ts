/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { RegBtn } from "../btn/log-in-btn";

export const WelcomeLogIn: FC = () => {
  return (
    <>
      <div className="p-4 mx-auto mt-12 bg-gray-100 rounded-xl">
        <p className="mb-8 font-bold text-center text-[20px]">
          Зарегистрируйтесь
        </p>
        <div className="flex justify-center ">
          <RegBtn />
        </div>
      </div>
    </>
  );
};
