/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserCard } from "../../entities/user-card/user-card";
import { UserProfile } from "../../entities/user-profile/user-profile";
import { useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const UserPage: FC = () => {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();
  if (!user) {
    return <div>Данные пользователя не найдены</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <button onClick={handleBack}>
          <IoIosArrowRoundBack className="w-12 h-12" />
        </button>
      </div>
      <div className="w-[60%] mx-auto">
        <UserProfile userCard={user} />
      </div>
    </>
  );
};
