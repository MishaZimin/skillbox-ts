/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
interface IInput {
  value: any;
}
export const Input: FC<IInput> = ({ value }) => {
  return (
    <>
      <input className="px-3 py-1 rounded-md" value={value} />
    </>
  );
};
