import { FC } from "react";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../features/context/my-provider";

type IUserCard = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface IProps {
  userCard: IUserCard;
}

export const UserCard: FC<IProps> = ({ userCard }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(`/user/${userCard.id}`, { state: { user: userCard } });
  };

  return (
    <>
      <button
        onClick={handleProfile}
        className="flex flex-row w-full p-4 text-start bg-slate-200 rounded-xl">
        <div className="w-[20%] my-auto mx-auto ">
          <img
            src={userCard.avatar}
            alt="avatar"
            className="rounded-full min-w-[40px]"
          />
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
