/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { useLocation } from "react-router-dom";

import { UserProfile } from "../../components/user-profile/user-profile";
import { BackBtn } from "../../components/btn/back-btn";
import { MyProfile } from "../../components/my-profile/my-profile";

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
