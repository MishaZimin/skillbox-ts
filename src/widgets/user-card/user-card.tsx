import { FC } from "react";

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

// const handleProfile = () => {
//   console.log("handleProfile");
// };

export const UserCard: FC<IProps> = ({ userCard }) => {
  return (
    <>
      <div
        // onClick={handleProfile}
        className="flex flex-row p-4 text-start bg-slate-200 rounded-xl gap-4">
        <div className="w-[10%] my-auto mx-auto ">
          <img src={userCard.avatar} alt="avatar" className="rounded-full" />
          {/* <p>{userCard.avatar}</p> */}
        </div>
        <div className="w-[90%] my-auto">
          <p className="font-bold">{userCard.first_name}</p>
          <p>{userCard.email}</p>
        </div>
      </div>
    </>
  );
};
