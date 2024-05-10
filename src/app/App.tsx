/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { HomePage } from "../pages/home/home-page";

export const App: FC = () => {
  // const { count } = useAppSelector(state => state.userReducer);
  // const { increment } = userSlice.actions;
  // const dispatch = useAppDispatch();

  return (
    <>
      <div className="">
        <HomePage />
      </div>
    </>
  );
};
