import TopNavBar from "./components/TopNavBar";
import Tip from "./components/Tip";
import CreatorsDisplay from "./components/CreatorsDisplay";
import ClaimPage from "./claim/page";


export default function Home() {
  return (
    <div className="">
      <TopNavBar/>
      <ClaimPage/>
      <div className="flex mt-20 justify-between mx-40">
      <Tip/>
      <CreatorsDisplay/>
      </div>
    </div>
  );
}
