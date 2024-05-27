import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegForm: FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);

  const handleReg = async () => {
    try {
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

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("email", email);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      console.error("error", error);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
      <div>
        <div
          className={`flex flex-row w-full gap-4 p-4 m-4 my-auto bg-gray-100 text-start rounded-xl ${
            shake ? "animate-shake" : ""
          }`}>
          <div className="w-full my-auto">
            <div className="pb-4 text-[20px] font-bold">
              <p>Регистрация</p>
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
              className="px-3 py-1 mt-4 transition duration-200 transform bg-gray-200 rounded-full hover:bg-white">
              <p>Далее</p>
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
