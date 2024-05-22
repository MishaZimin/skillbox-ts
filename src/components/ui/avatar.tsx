/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";

interface IAvatar {
  avatar: any;
}

export const Avatar: FC<IAvatar> = ({ avatar }) => {
  return (
    <>
      <img
        src={avatar}
        alt="avatar"
        className="rounded-xl min-w-[40px] my-auto"
      />
    </>
  );
};
