import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../features/context/my-provider";
import { Input } from "../../shared/ui/input";

type IUserCard = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface IProps {
  userCard: IUserCard;
}

export const UserProfile: FC<IProps> = ({ userCard }) => {
  const [firstName, setFirstName] = useState(userCard.first_name);
  const [lastName, setLastName] = useState(userCard.last_name);
  const [email, setEmail] = useState(userCard.email);

  // const getUserCards = async () => {
  //   const res = await fetch(`https://reqres.in/api/users/${userCard.id}`);
  //   const json = await res.json();
  //   console.log(json.data);
  //   return json.data;
  // };

  // useEffect(() => {
  //   const res = getUserCards();
  //   console.log("=res=", res);
  // });

  const handleSave = async () => {
    try {
      console.log("patch update:", firstName, "|", lastName, "|", email);
      const url = `https://reqres.in/api/users/${userCard.id}`;
      console.log(url);
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
        }),
      });

      if (!res.ok) {
        throw new Error("error" + res.status);
      }
      console.log("res: ", res);
      console.log("status", res.status);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {});

  return (
    <>
      <div className="flex flex-row w-full gap-4 p-4 m-4 text-start bg-slate-200 rounded-xl">
        <div className="w-[20%] my-auto mx-auto ">
          <img
            src={userCard.avatar}
            alt="avatar"
            className="rounded-full min-w-[40px]"
          />
        </div>
        <div className="w-[80%] my-auto">
          <div className="flex flex-col gap-2 min-w-40 max-w-80">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-3 py-1 rounded-md"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            className="px-3 py-1 mt-4 rounded-md bg-slate-100">
            save
          </button>
        </div>
      </div>
    </>
  );
};
