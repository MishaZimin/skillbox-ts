import { FC } from "react";

type FilterProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
};

export const Filter: FC<FilterProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="rounded-full bg-gray-100 w-[40%] mb-6 pr-2">
      <select
        value={filter}
        className="w-full px-4 py-2 bg-gray-100 rounded-full"
        onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">Показать все</option>
        <option value="even">Показать четные id</option>
        <option value="odd">Показать нечетные id</option>
      </select>
    </div>
  );
};
