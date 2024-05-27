import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setQuery } from "../../app/store/searchSlice";
import { CiSearch } from "react-icons/ci";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setQuery(search));
    }, 300);

    return () => clearInterval(interval);
  }, [dispatch, search]);

  const handleSearchSubmit = () => {
    dispatch(setQuery(search));
  };

  return (
    <>
      <div className="flex flex-row bg-gray-100 rounded-full ">
        <input
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 bg-gray-100 rounded-full bg-red"
        />
        <button onClick={handleSearchSubmit} className="px-4">
          <CiSearch />
        </button>
      </div>
    </>
  );
};
