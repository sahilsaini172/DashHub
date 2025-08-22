import Header, {
  StaticCard,
  DynamicCard,
  Filter,
  Graph,
  Chat,
  Post,
  Profile,
  Following,
  Activities,
  CryptoCard,
  Markets,
  Operations,
  BuyOrder
} from "./Components.jsx";

import CandleChart from "./CandleChart.jsx";

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
        <BarChart />
        <BarChart />
      </div>
    </div>
  );
}
function SaasDashboard() {
  return (
    <div className="h-screen p-8 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-stone-300">
        <h1 className="text-2xl text-stone-200">SaaS</h1>
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
        <DynamicCard title="Income" subTitle="$37.200" percent="6.45" />
        <DynamicCard
          title="Orders"
          subTitle="3.231"
          percent="4.21"
          profit={false}
        />
        <DynamicCard title="Activity" subTitle="12.231" percent="7.45" />
        <StaticCard />
      </div>
      <div className="flex gap-4 mt-4">
        <BarChart />
        <BarChart />
        <BarChart />
      </div>
      <div className="flex flex-col mt-4 bg-stone-800 rounded-2xl p-4 gap-4">
        <div className="flex justify-between items-center">
          <h2>Top Selling Products</h2>
          <i class="fa-solid fa-ellipsis text-stone-300"></i>
        </div>
        <table className="text-left text-sm font-medium text-stone-300">
          <tr className="*:py-2 border-b border-b-stone-500">
            <th>Name</th>
            <th>Company</th>
            <th>Assigned</th>
            <th className="text-right pr-3">Orders</th>
            <th>Status</th>
          </tr>
          <tr className="*:py-2 font-light">
            <td className="flex gap-2 items-center">
              <div className="p-2 rounded-lg bg-stone-700 w-fit">
                <IconBtn size="sm" icon="bell-slash" style="500" />
              </div>
              <div className="flex flex-col font-normal">
                <h2>Aurora</h2>
                <p className="font-light text-xs">UI Kit</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>Gantos</h2>
                <p className="font-light text-xs">Real Estate</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>John Doe</h2>
                <p className="font-light text-xs">HTML, JS, React</p>
              </div>
            </td>
            <td className="text-right pr-3">453</td>
            <td>
              <span className="inline-block bg-green-500 px-1 rounded-lg text-white">
                In progress
              </span>
            </td>
          </tr>
          <tr className="*:py-2 font-light">
            <td className="flex gap-2 items-center">
              <div className="p-2 rounded-lg bg-stone-700 w-fit">
                <IconBtn size="sm" icon="bell-slash" style="500" />
              </div>
              <div className="flex flex-col font-normal">
                <h2>Aurora</h2>
                <p className="font-light text-xs">UI Kit</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>Gantos</h2>
                <p className="font-light text-xs">Real Estate</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>John Doe</h2>
                <p className="font-light text-xs">HTML, JS, React</p>
              </div>
            </td>
            <td className="text-right pr-3">453</td>
            <td>
              <span className="inline-block bg-green-500 px-1 rounded-lg text-white">
                In progress
              </span>
            </td>
          </tr>
          <tr className="*:py-2 font-light">
            <td className="flex gap-2 items-center">
              <div className="p-2 rounded-lg bg-stone-700 w-fit">
                <IconBtn size="sm" icon="bell-slash" style="500" />
              </div>
              <div className="flex flex-col font-normal">
                <h2>Aurora</h2>
                <p className="font-light text-xs">UI Kit</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>Gantos</h2>
                <p className="font-light text-xs">Real Estate</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>John Doe</h2>
                <p className="font-light text-xs">HTML, JS, React</p>
              </div>
            </td>
            <td className="text-right pr-3">453</td>
            <td>
              <span className="inline-block bg-green-500 px-1 rounded-lg text-white">
                In progress
              </span>
            </td>
          </tr>
          <tr className="*:py-2 font-light">
            <td className="flex gap-2 items-center">
              <div className="p-2 rounded-lg bg-stone-700 w-fit">
                <IconBtn size="sm" icon="bell-slash" style="500" />
              </div>
              <div className="flex flex-col font-normal">
                <h2>Aurora</h2>
                <p className="font-light text-xs">UI Kit</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>Gantos</h2>
                <p className="font-light text-xs">Real Estate</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>John Doe</h2>
                <p className="font-light text-xs">HTML, JS, React</p>
              </div>
            </td>
            <td className="text-right pr-3">453</td>
            <td>
              <span className="inline-block bg-green-500 px-1 rounded-lg text-white">
                In progress
              </span>
            </td>
          </tr>
          <tr className="*:py-2 font-light">
            <td className="flex gap-2 items-center">
              <div className="p-2 rounded-lg bg-stone-700 w-fit">
                <IconBtn size="sm" icon="bell-slash" style="500" />
              </div>
              <div className="flex flex-col font-normal">
                <h2>Aurora</h2>
                <p className="font-light text-xs">UI Kit</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>Gantos</h2>
                <p className="font-light text-xs">Real Estate</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col font-normal">
                <h2>John Doe</h2>
                <p className="font-light text-xs">HTML, JS, React</p>
              </div>
            </td>
            <td className="text-right pr-3">453</td>
            <td>
              <span className="inline-block bg-green-500 px-1 rounded-lg text-white">
                In progress
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function SocialDashboard() {
  return (
    <div className="flex my-4 gap-4 mx-20">
      <div className="p-4 bg-stone-800 flex flex-col rounded-2xl w-4/5">
        <Post />
        <Post img={false} comment={false} />
        <Post img={true} comment={false} />
        <Post img={false} comment={true} />
      </div>
      <div className="flex flex-col rounded-2xl w-1/5 gap-4">
        <Profile />
        <Following />
        <Activities />
      </div>
    </div>
  );
}

const CryptoDashboard = () => {
  return (
    <div className="h-screen p-8 flex flex-col">
      <div className="flex items-center justify-between mb-4 text-stone-300">
        <h1 className="text-2xl text-stone-200">SaaS</h1>
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
      <div className="grid grid-cols-5 grid-rows-1 gap-2">
        <CryptoCard icon="bitcoin-sign" />
        <CryptoCard icon="bitcoin-sign" />
        <CryptoCard />
        <CryptoCard icon="bitcoin-sign" />
        <CryptoCard />
      </div>
      <div className="flex gap-4 mt-4">
        <Markets />
        <CandleChart/>
      </div>
      <div className="flex gap-4 mt-4">
        <Operations/>
        <BuyOrder/>
        <BuyOrder title="Sell Orders"/>
      </div>
    </div>
  );
};

export default DefaultDashboard;
export { AnalyticsDashboard, SaasDashboard, SocialDashboard, CryptoDashboard };
