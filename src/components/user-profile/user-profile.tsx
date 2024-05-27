import { FC, useEffect, useState } from "react";
import { Avatar } from "../ui/avatar";
import { IUserCardData } from "../../components/user-cards/user-cards";

interface IUserCard {
  userCard: IUserCardData;
}

export const UserProfile: FC<IUserCard> = ({ userCard }) => {
  const [firstName, setFirstName] = useState<string>(userCard.first_name);
  const [lastName, setLastName] = useState<string>(userCard.last_name);
  const [email, setEmail] = useState<string>(userCard.email);

  const handleSave = async () => {
    try {
      const url = `https://reqres.in/api/users/${userCard.id}`;
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
        }),
      });

      if (!res.ok) {
        throw new Error("error" + res.status);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {});

  return (
    <>
      <div className="flex flex-row w-full gap-4 p-4 m-4 bg-gray-100 text-start rounded-xl">
        <div className="w-[20%] my-auto mx-auto ">
          <Avatar avatar={userCard.avatar} />
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
            className="px-3 py-1 mt-4 transition duration-200 transform bg-gray-200 rounded-full hover:bg-white">
            <p>Сохранить</p>
          </button>
        </div>
      </div>
    </>
  );
};
