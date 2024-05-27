import { FC } from "react";

interface IInput {
  value: string;
}

export const Input: FC<IInput> = ({ value }) => {
  return (
    <>
      <input className="px-3 py-1 rounded-md" value={value} />
    </>
  );
};
