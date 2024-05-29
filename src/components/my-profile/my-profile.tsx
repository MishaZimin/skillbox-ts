import { FC, useEffect, useState } from "react";

import { Avatar } from "../ui/avatar";

export const MyProfile: FC = () => {
  const [firstName, setFirstName] = useState<string>(
    localStorage.getItem("firstName") || ""
  );
  const [email, setEmail] = useState<string>(
    localStorage.getItem("email") || ""
  );

  const handleSave = async () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  const getAvatar = (): string => {
    const avatar = localStorage.getItem("avatar");
    const defAvatar =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThprVrxe3Zw_m09SuWD2K25LSSP4j9bYjGoA&s";

    return avatar ? avatar : defAvatar;
  };

  return (
    <>
      <div className="flex flex-row w-full gap-4 p-4 m-4 bg-gray-100 text-start rounded-xl">
        <div className="w-[20%] my-auto mx-auto min-w-[100px]">
          <Avatar avatar={getAvatar()} />
        </div>
        <div className="w-[80%] my-auto">
          <div className="flex flex-col gap-2 min-w-40 max-w-80">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-3 py-1 rounded-md"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1 rounded-md"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-3 py-1 mt-4 transition duration-200 transform bg-gray-200 rounded-full hover:bg-white">
            <p>Сохранить</p>
          </button>
        </div>
      </div>
    </>
  );
};
