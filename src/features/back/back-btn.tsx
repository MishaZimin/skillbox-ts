/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const BackBtn: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={handleBack} className="mt-4 ml-4">
        <IoIosArrowRoundBack className="w-12 h-12" />
      </button>
    </>
  );
};
