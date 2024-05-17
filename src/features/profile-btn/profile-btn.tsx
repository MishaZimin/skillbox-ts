/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

export const ProfileBtn: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <>
      <button onClick={handleBack} className="absolute right-4 top-4">
        <FaRegCircleUser className="w-10 h-10" />
      </button>
    </>
  );
};
