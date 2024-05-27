import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegCircleUser } from "react-icons/fa6";

export const ProfileBtn: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="absolute transition duration-200 transform opacity-30 right-4 top-4 hover:opacity-50">
        <FaRegCircleUser className="w-10 h-10" />
      </button>
    </>
  );
};
