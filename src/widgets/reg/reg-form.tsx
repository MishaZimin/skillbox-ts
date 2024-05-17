import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../features/context/my-provider";
// import { Input } from "../../shared/ui/input";

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

export const RegForm: FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [token, setToken] = useState("");

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

  // useEffect(() => {});

  return (
    <>
      <div className="flex flex-row w-full gap-4 p-4 m-4 text-start bg-slate-200 rounded-xl">
        <div className="w-[80%] my-auto">
          <div className="flex flex-col gap-2 min-w-40 max-w-80">
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
            className="px-3 py-1 mt-4 rounded-md bg-slate-100">
            reg
          </button>
        </div>
      </div>
    </>
  );
};
