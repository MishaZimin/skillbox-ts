import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar } from "../ui/avatar";
import { IUserCardData } from "../../components/user-cards/user-cards";

interface IUserCard {
  userCard: IUserCardData;
}

export const UserCard: FC<IUserCard> = ({ userCard }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(`/user/${userCard.id}`, { state: { user: userCard } });
  };

  return (
    <>
      <button
        onClick={handleProfile}
        className="flex flex-row w-full p-2 transition duration-200 transform bg-gray-100 text-start rounded-2xl hover:bg-gray-200">
        <div className="w-[20%] min-w-40 my-auto">
          <Avatar avatar={userCard.avatar} />
        </div>
        <div className="w-[80%] my-auto ml-4">
          <p className="font-bold text-[20px] mb-2">
            {userCard.first_name} {userCard.last_name}
          </p>
          <p>{userCard.email}</p>
        </div>
      </button>
    </>
  );
};
