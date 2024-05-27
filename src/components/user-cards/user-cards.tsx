import { FC, useEffect, useState, useCallback } from "react";
import { UserCard } from "../user-card/user-card";
import { useSelector } from "react-redux";
import { Pagination } from "../pagination/pagination";
import { Filter } from "../filter/filter";

export interface IUserCardData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IUserApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserCardData[];
}

export const UserCards: FC = () => {
  const [userCards, setUserCards] = useState<IUserCardData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("all");
  const [originalUserCards, setOriginalUserCards] = useState<IUserCardData[]>(
    []
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  const searchQuery = useSelector((state: any) => state.search.query);

  const getUserCards = async (page: number) => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json: IUserApiResponse = await res.json();
    setTotalPages(json.total_pages);
    setUserCards(json.data);
    setOriginalUserCards(json.data);
  };

  const filteredUserCards = userCards.filter((userCard) =>
    `${userCard.first_name} ${userCard.last_name} ${userCard.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleFilterChange = useCallback(
    (selectedFilter: string) => {
      setFilter(selectedFilter);
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
    },
    [originalUserCards]
  );

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    setFilter("all");
  };

  useEffect(() => {
    getUserCards(page);
  }, [page]);

  useEffect(() => {
    handleFilterChange(filter);
  }, [filter, handleFilterChange]);

  return (
    <>
      <Filter filter={filter} onFilterChange={handleFilterChange} />

      <div className="flex flex-col w-full gap-4">
        {filteredUserCards.map((userCard) => (
          <div key={userCard.id} className="">
            <UserCard userCard={userCard} />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
