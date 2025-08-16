import Header, {
  StaticCard,
  DynamicCard,
  Filter,
  Graph,
} from "./Components.jsx";

const DefaultDashboard = () => {
  return (
    <div className="h-screen p-8 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-stone-300">
        <h1 className="text-2xl text-stone-200">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Filter />
          <div className="bg-stone-800 w-fit p-1 rounded-lg text-sm">
            <i class="fa-solid fa-filter"></i>
          </div>
          <div className="bg-stone-800 w-fit p-1 rounded-lg text-sm">
            <i class="fa-solid fa-arrows-rotate"></i>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <StaticCard />
        <DynamicCard />
        <DynamicCard />
        <DynamicCard />
      </div>
      <Graph />
    </div>
  );
};

export default DefaultDashboard;
