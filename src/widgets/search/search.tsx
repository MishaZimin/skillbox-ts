/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";

export const Search: FC = () => {
  return (
    <>
      <div className="flex flex-row bg-slate-200 rounded-full ">
        <input
          placeholder="search"
          className="w-full bg-red py-2 rounded-full bg-slate-200 px-4"
        />
        <button className="px-4">
          <p>-0</p>
        </button>
      </div>
    </>
  );
};
