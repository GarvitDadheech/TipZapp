import TopNavBar from "./components/TopNavBar";
import Tip from "./components/Tip";
import CreatorsDisplay from "./components/CreatorsDisplay";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="">
      <TopNavBar/>
      <Dashboard/>
      <div className="flex mt-20 justify-between mx-40">
      <Tip/>
      <CreatorsDisplay/>
      </div>
    </div>
  );
}
