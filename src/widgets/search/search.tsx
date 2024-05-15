/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "./../../features/searchSlice";
import { CiSearch } from "react-icons/ci";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  // const { setSearchValue } = useContext(MyContext);
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    // setSearchValue(event.target.value);
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
      <div className="flex flex-row rounded-full bg-slate-200 ">
        <input
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 rounded-full bg-red bg-slate-200"
        />
        <button onClick={handleSearchSubmit} className="px-4">
          <CiSearch />
        </button>
      </div>
    </>
  );
};
