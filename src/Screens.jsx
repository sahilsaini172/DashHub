import Header, {
  StaticCard,
  DynamicCard,
  Filter,
  Graph,
  Chat,
} from "./Components.jsx";

import IconBtn from "./Buttons.jsx";

const DefaultDashboard = () => {
  return (
    <div className="h-screen p-8 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-stone-300">
        <h1 className="text-2xl text-stone-200">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Filter />
          <div className="bg-stone-800 w-fit p-1 rounded-lg">
            <IconBtn icon="filter" size="sm"/>
          </div>
          <div className="bg-stone-800 w-fit p-1 rounded-lg">
            <IconBtn icon="arrows-rotate" size="sm"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <StaticCard />
        <DynamicCard earnings="19.100" profit={true} percent="3.41" />
        <DynamicCard earnings="23.230" profit={false} percent="2.32"/>
        <DynamicCard />
      </div>
      <div className="flex mt-4 justify-between gap-4">
        <Graph />
        <Chat />
      </div>
    </div>
  );
};



function AnalyticsDashboard() {
  return <div className="text-2xl font-bold">Analytics Dashboard</div>;
}
function SaasDashboard() {
  return <div className="text-2xl font-bold">Saas Dashboard</div>;
}
function SocialDashboard() {
  return <div className="text-2xl font-bold">Social Dashboard</div>;
}

export default DefaultDashboard;
export {AnalyticsDashboard,SaasDashboard,SocialDashboard};
