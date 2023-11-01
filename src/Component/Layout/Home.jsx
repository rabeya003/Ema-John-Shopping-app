import { Outlet } from "react-router-dom";
import Hedaer from "../Header/Hedaer";

const Home = () => {
  return (
    <div>
      <Hedaer></Hedaer>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
