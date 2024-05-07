/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, useEffect, useState } from "react";
import { UserCard } from "./user-card";

type IUserCard = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const UserCards: FC = () => {
  const [userCards, setUserCards] = useState<IUserCard[]>([]);

  const getUserCards = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUserCards(json.data);
  };
  useEffect(() => {
    getUserCards();
  }, []);

  const handleProfile = (index: number) => {
    console.log("handleProfile", index);
  };

  return (
    <>
      <div className=" flex w-full flex-col">
        {userCards.map((userCard, index) => (
          <button
            key={index}
            onClick={() => handleProfile(index)}
            className="m-2">
            <UserCard userCard={userCard} />
          </button>
        ))}
      </div>
    </>
  );
};
