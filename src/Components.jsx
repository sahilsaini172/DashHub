import IconBtn from "./Buttons.jsx";

const Header = () => {
  return (
    <div className="flex justify-between bg-stone-800 shadow shadow-stone-800 px-4 py-2">
      <div className="flex items-center gap-4">
        <IconBtn icon="bars" size="md" />
        <div className="bg-stone-700 p-2 rounded-lg flex items-center">
          <input type="text" placeholder="Search..." className="flex-1" />
          <IconBtn icon="magnifying-glass" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconBtn icon="message" size="md" />
        <IconBtn icon="bell-slash" size="md" />
        <div className="flex gap-2 items-center">
          <img
            src="./src/assets/img/profile_pic.jpg"
            className="h-9 object-cover rounded-full aspect-square"
          />
          <select id="">
            <option value="John Doe" selected>
              John Doe
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

const StaticCard = () => {
  return (
    <div className="flex flex-col bg-stone-800 rounded-xl p-4 text-indigo-400 gap-1 h-full">
      <h2 className="font-medium">Welcome back, John.</h2>
      <p className="text-sm">Dashboard Admin</p>
    </div>
  );
};

const DynamicCard = ({ earnings = "", profit = true, percent = "5.35" }) => {
  return (
    <div className="flex flex-col bg-stone-800 rounded-xl p-4 text-stone-200 gap-1 h-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium">$ {earnings}</h2>
          <p className="text-sm">Total Earnings</p>
        </div>
        <div className="bg-stone-700 text-2xl text-indigo-400 rounded-full py-2 px-4 flex w-fit">
          $
        </div>
      </div>
      <p className="text-sm text-stone-300">
        <span
          className={`text-xs px-2 rounded-sm bg-stone-700 ${
            profit ? "text-green-400" : "text-red-400"
          } inline-block`}
        >
          {profit ? "+" : "-"}
          {percent}%
        </span>{" "}
        Since last week
      </p>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="bg-stone-800 text-stone-300 w-fit p-1 rounded-lg">
      <IconBtn icon="calendar-days" size="sm" />
      <select>
        <option value="Today">Today</option>
      </select>
    </div>
  );
};

const Graph = () => {
  return (
    <div className="p-4 bg-stone-800 rounded-xl w-3/5 flex justify-between items-center">
      <h2>Sales & Revenue</h2>
      <i class="fa-solid fa-ellipsis text-stone-300"></i>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="flex flex-col w-2/5 bg-stone-800 rounded-xl p-4">
      <div className="flex justify-between items-center">
        <h3>Daily Feed</h3>
        <p
          className="text-sm bg-indigo-400 w-fit px-2 rounded-sm
      "
        >
          Today
        </p>
      </div>
      <div>
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
      </div>
      <button className="w-full rounded-xl p-2 bg-indigo-400">Load More</button>
    </div>
  );
};

const ChatBubble = () => {
  return (
    <div className="flex justify-between gap-2 mt-4 border-b-1 border-b-stone-700 pb-4">
      <div className="flex gap-2">
        <img
          src="./src/assets/img/profile_pic.jpg"
          className="h-[40px] aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-stone-300">
            <span className="text-stone-100 font-medium">Jill</span> started
            follwoing <span className="text-stone-100 font-medium">Johnny</span>
          </p>
          <p className="text-xs text-stone-400 font-light">Today 7:51 pm</p>
        </div>
      </div>
      <p className="font-light text-stone-300 text-xs">30m ago</p>
    </div>
  );
};

export default Header;
export { StaticCard, DynamicCard, Filter, Graph, Chat };
