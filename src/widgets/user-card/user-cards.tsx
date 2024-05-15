import React, { FC, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { UserCard } from "../../entities/user-card/user-card";
import { useSelector } from "react-redux";
// import RootState from "./../../app/store/store";
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
  const [filter, setFilter] = useState<string>("all");
  const [originalUserCards, setOriginalUserCards] = useState<IUserCard[]>([]);

  // const navigate = useNavigate();

  const searchQuery = useSelector((state: any) => state.search.query);

  const getUserCards = async (page: number) => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await res.json();
    console.log(json.data);
    setUserCards(json.data);
    setOriginalUserCards(json.data);
  };

  useEffect(() => {
    getUserCards(page);
  }, [page]);

  useEffect(() => {
    handleFilterChange(filter);
  }, [filter]);

  // const handleProfile = (userId: number) => {
  //   console.log("handleProfile", userId);
  //   navigate(`/user/${userId}`);
  // };

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

  const handleFilterChange = (selectedFilter: string) => {
    switch (selectedFilter) {
      case "even":
        const evenFiltered = originalUserCards.filter(
          (userCard) => userCard.id % 2 === 0
        );
        setUserCards(evenFiltered);
        break;
      case "odd":
        const oddFiltered = originalUserCards.filter(
          (userCard) => userCard.id % 2 !== 0
        );
        setUserCards(oddFiltered);
        break;
      default:
        setUserCards(originalUserCards);
    }
  };

  // const handleEvenIds = () => {
  //   const filteredCards = userCards.filter(userCard => userCard.id % 2 === 0);
  //   setUserCards(filteredCards);
  // };

  // const handleOddIds = () => {
  //   const filteredCards = userCards.filter(userCard => userCard.id % 2 !== 0);
  //   setUserCards(filteredCards);
  // };

  return (
    <>
      <div className=" rounded-full bg-slate-200 w-[30%] mb-6 pr-2">
        <select
          className=" w-[100%] bg-slate-200 rounded-full py-2 px-4 "
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option className="" value="all">
            Показать все
          </option>
          <option className="" value="even">
            Показать четные id
          </option>
          <option className="" value="odd">
            Показать нечетные id
          </option>
        </select>
      </div>

      <div className="flex flex-col w-full gap-4">
        {filteredUserCards.map((userCard) => (
          <div key={userCard.id} className="">
            <UserCard userCard={userCard} />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center gap-8 mt-12">
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
