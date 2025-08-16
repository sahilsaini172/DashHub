const Header = () => {
  return (
    <div className="flex justify-between bg-stone-800 shadow shadow-stone-800 px-4 py-2">
      <div className="flex items-center gap-4">
        <i class="fa-solid fa-bars text-xl text-stone-300"></i>
        <div className="bg-stone-700 p-2 rounded-lg flex items-center">
          <input type="text" placeholder="Search..." className="flex-1" />
          <i className="fa-solid fa-magnifying-glass text-lg text-stone-300"></i>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <i class="fa-solid fa-message text-lg text-stone-300"></i>
        <i class="fa-solid fa-bell-slash text-lg text-stone-300"></i>
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

const DynamicCard = () => {
  return (
    <div className="flex flex-col bg-stone-800 rounded-xl p-4 text-stone-200 gap-1 h-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium">$ 19.100</h2>
          <p className="text-sm">Total Earnings</p>
        </div>
        <div className="bg-stone-700 text-2xl text-indigo-400 rounded-full py-2 px-4 flex w-fit">
          $
        </div>
      </div>
      <p className="text-sm text-stone-300">
        <span className="text-xs px-2 rounded-sm bg-stone-700 text-green-400 inline-block">
          +5.35%
        </span>{" "}
        Since last week
      </p>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="bg-stone-800 text-stone-300 w-fit p-1 rounded-lg text-sm">
      <i class="fa-solid fa-calendar-days"></i>
      <select>
        <option value="Today">Today</option>
      </select>
    </div>
  );
};

const Graph = () => {
    return (
        <div className="p-4 bg-stone-800 rounded-xl mt-4">
            <h2>Sales & Revenue</h2>
        </div>
    )
};

export default Header;
export { StaticCard, DynamicCard, Filter, Graph };
