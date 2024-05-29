import { FC } from "react";
import { useLocation } from "react-router-dom";

import { UserProfile } from "../../components/user-profile/user-profile";
import { BackBtn } from "../../components/btn/back-btn";

export const UserPage: FC = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <BackBtn />
      <div className="w-[60%] mx-auto min-w-[370px]">
        <UserProfile userCard={user} />
      </div>
    </>
  );
};
