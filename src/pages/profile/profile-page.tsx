/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { useLocation } from "react-router-dom";

import { UserProfile } from "../../entities/user-profile/user-profile";
import { BackBtn } from "../../features/back/back-btn";
import { MyProfile } from "../../entities/my-profile/my-profile";

export const ProfilePage: FC = () => {
  return (
    <>
      <BackBtn />
      <div className="w-[60%] mx-auto">
        <MyProfile />
      </div>
    </>
  );
};
