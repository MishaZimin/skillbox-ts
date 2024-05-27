import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const RegBtn: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reg");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col px-4 py-2 transition duration-200 transform bg-gray-200 rounded-full hover:bg-white">
        <p>Регистрация</p>
      </button>
    </>
  );
};
