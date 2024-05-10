import React, { FC, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { UserCard } from "../../entities/user-card/user-card";
import { useSelector } from "react-redux";
import RootState from "./../../app/store/store";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type IUserCard = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const UserCards: FC = () => {
  const [userCards, setUserCards] = useState<IUserCard[]>([]);
  const [page, setPage] = useState<number>(1);

  const navigate = useNavigate();

  const searchQuery = useSelector((state: any) => state.search.query);

  const getUserCards = async (page: number) => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await res.json();
    console.log(json.data);
    setUserCards(json.data);
  };

  useEffect(() => {
    getUserCards(page);
  }, [page]);

  const handleProfile = (userId: number) => {
    console.log("handleProfile", userId);
    navigate(`/user/${userId}`);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const filteredUserCards = userCards.filter((userCard) =>
    `${userCard.first_name} ${userCard.last_name} ${userCard.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col w-full ">
        {filteredUserCards.map((userCard) => (
          <div key={userCard.id} className="">
            <UserCard userCard={userCard} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-8">
        <button onClick={handlePrevPage} disabled={page === 1}>
          <IoIosArrowBack />
        </button>
        <button onClick={handleNextPage}>
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};
