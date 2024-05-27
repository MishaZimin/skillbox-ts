import { FC } from "react";

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
