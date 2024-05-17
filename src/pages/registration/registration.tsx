/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { useLocation } from "react-router-dom";
// import { UserCard } from "../../entities/user-card/user-card";
import { UserProfile } from "../../entities/user-profile/user-profile";
import { RegForm } from "../../widgets/reg/reg-form";
import { BackBtn } from "../../features/back/back-btn";

export const RegistrationPage: FC = () => {
  return (
    <>
      <BackBtn />
      <div className="w-[60%] mx-auto">
        <RegForm />
      </div>
    </>
  );
};
