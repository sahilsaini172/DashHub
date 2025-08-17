import Header, {
  StaticCard,
  DynamicCard,
  Filter,
  Graph,
  Chat,
} from "./Components.jsx";

import IconBtn from "./Buttons.jsx";
import BarChart from "./Graph.jsx";

const DefaultDashboard = () => {
  return (
    <div className="h-screen p-8 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-stone-300">
        <h1 className="text-2xl text-stone-200">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Filter />
          <div className="bg-stone-800 w-fit p-1 rounded-lg">
            <IconBtn icon="filter" size="sm" />
          </div>
          <div className="bg-stone-800 w-fit p-1 rounded-lg">
            <IconBtn icon="arrows-rotate" size="sm" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <StaticCard />
        <DynamicCard subTitle="$ 19.100" profit={true} percent="3.41" />
        <DynamicCard subTitle="$ 23.230" profit={false} percent="2.32" />
        <DynamicCard subTitle="$ 43.200" />
      </div>
      <div className="flex mt-4 justify-between gap-4">
        <Graph />
        <Chat />
      </div>
    </div>
  );
};

function AnalyticsDashboard() {
  return (
    <div className="h-screen p-8 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-stone-300">
        <h1 className="text-2xl text-stone-200">Analytics</h1>
        <div className="flex gap-2 items-center">
          <Filter />
          <div className="bg-stone-800 w-fit p-1 rounded-lg">
            <IconBtn icon="filter" size="sm" />
          </div>
          <div className="bg-stone-800 w-fit p-1 rounded-lg">
            <IconBtn icon="arrows-rotate" size="sm" />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-1/2">
          <StaticCard />
          <DynamicCard
            title="Bounce"
            subTitle="2.323"
            percent="3.63"
            profit={false}
          />
          <DynamicCard title="Real-Time" subTitle="1.243" />
          <DynamicCard
            title="Visitors"
            subTitle="21.231"
            percent="1.22"
            profit={false}
          />
        </div>
        <div className="p-4 bg-stone-800 rounded-xl w-3/5 flex justify-between items-center">
          <h2>Real-Time</h2>
          <i class="fa-solid fa-ellipsis text-stone-300"></i>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <BarChart />
      </div>
    </div>
  );
}
function SaasDashboard() {
  return <div className="text-2xl font-bold">Saas Dashboard</div>;
}
function SocialDashboard() {
  return <div className="text-2xl font-bold">Social Dashboard</div>;
}

export default DefaultDashboard;
export { AnalyticsDashboard, SaasDashboard, SocialDashboard };
