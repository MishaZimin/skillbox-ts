/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { useNavigate } from "react-router-dom";

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
        <p>регистрация</p>
      </button>
    </>
  );
};
