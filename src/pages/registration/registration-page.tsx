/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";

import { RegForm } from "../../components/log-in/log-in";
import { BackBtn } from "../../components/btn/back-btn";

export const RegistrationPage: FC = () => {
  return (
    <>
      <BackBtn />
      <div className="w-[30%] mx-auto ">
        <RegForm />
      </div>
    </>
  );
};
