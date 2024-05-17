import { FC, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../features/context/my-provider";
// import { Input } from "../../shared/ui/input";

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

export const MyProfile: FC = () => {
  const [firstName, setFirstName] = useState<string>(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState<string>(
    localStorage.getItem("firstName") || ""
  );
  const [email, setEmail] = useState<string>(
    localStorage.getItem("email") || ""
  );

  const handleSave = async () => {};

  useEffect(() => {});

  const getAvatar = () => {
    const avatar = localStorage.getItem("avatar");
    const defAvatar =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThprVrxe3Zw_m09SuWD2K25LSSP4j9bYjGoA&s";
    console.log(avatar);

    return avatar ? avatar : defAvatar;
  };

  return (
    <>
      <div className="flex flex-row w-full gap-4 p-4 m-4 text-start bg-slate-200 rounded-xl">
        <div className="w-[20%] my-auto mx-auto ">
          <img
            src={getAvatar()}
            alt="avatar"
            className="rounded-full min-w-[40px]"
          />
        </div>
        <div className="w-[80%] my-auto">
          <div className="flex flex-col gap-2 min-w-40 max-w-80">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-3 py-1 rounded-md"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="px-3 py-1 rounded-md"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1 rounded-md"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-3 py-1 mt-4 rounded-md bg-slate-100">
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};