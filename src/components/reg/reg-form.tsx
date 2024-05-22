import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../features/context/my-provider";
// import { Input } from "../../shared/ui/input";

// type IUserCard = {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// };

// interface IProps {
//   userCard: IUserCard;
// }

export const RegForm: FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [, setToken] = useState("");

  const handleReg = async () => {
    try {
      console.log("reg", email, "|", password, "|", firstName, "|", avatar);
      const url = `https://reqres.in/api/register`;
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error: ${res.status} ${errorText}`);
      }

      const data = await res.json();
      setToken(data.token);

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("email", email);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("token", data.token);

      console.log("Registration successful! token:", data.token);

      console.log("res: ", res);
      console.log("status", res.status);
      navigate("/");
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-row w-full gap-4 p-4 m-4 my-auto bg-gray-200 text-start rounded-xl">
          <div className="w-full my-auto">
            <div className="pb-4 text-[20px] font-bold">
              <p>регистрация</p>
            </div>
            <div className="flex flex-col gap-2 min-w-40">
              <input
                value={firstName}
                placeholder="Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="px-3 py-1 rounded-md"
              />

              <input
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-1 rounded-md"
              />
              <input
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-1 rounded-md"
              />
              <input
                value={avatar}
                placeholder="Url Avatar"
                onChange={(e) => setAvatar(e.target.value)}
                className="px-3 py-1 rounded-md"
              />
            </div>

            <button
              onClick={handleReg}
              className="px-3 py-1 mt-4 bg-white rounded-md">
              reg
            </button>
          </div>
        </div>
        <div className="w-full mt-8 bg-gray-100 rounded-xl h-[50%] ml-4 p-4">
          <p>test</p>
          <p>"email": "eve.holt@reqres.in"</p>
          <p>"password": "pistol"</p>
        </div>
      </div>
    </>
  );
};
