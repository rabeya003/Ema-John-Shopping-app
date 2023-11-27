import { Outlet } from "react-router-dom";
import Hedaer from "../Header/Hedaer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hedaer></Hedaer>
      <div className="homeDetails"></div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
