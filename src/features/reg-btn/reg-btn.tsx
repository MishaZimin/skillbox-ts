/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

export const RegBtn: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/reg");
  };

  return (
    <>
      <button
        onClick={handleBack}
        className="flex flex-col px-4 py-2 bg-gray-200 rounded-full">
        {/* <FaRegCircleUser className="w-10 h-10" /> */}
        <p>регистрация</p>
      </button>
    </>
  );
};
