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

const DynamicCard = ({
  title = "Total Earnings",
  subTitle = "",
  profit = true,
  percent = "5.35",
}) => {
  return (
    <div className="flex flex-col bg-stone-800 rounded-xl p-4 text-stone-200 gap-1 h-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium">{subTitle}</h2>
          <p className="text-sm">{title}</p>
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

const Post = ({ img = true, comment = true }) => {
  return (
    <div className="flex w-full gap-4 text-stone-100 border-b border-b-stone-500 my-4">
      <div className="w-1/9 h-fit bg-amber-50  rounded-full overflow-hidden">
        <img
          src="./src/assets/Img/profile_pic.jpg"
          className="object-cover aspect-square rounded-full"
        />
      </div>
      <div className="flex flex-col w-8/9">
        <div className="flex justify-between">
          <h3 className="text-lg">John Doe</h3>
          <p className="text-stone-400 text-sm">5m ago</p>
        </div>
        <div className="text-stone-200 my-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            commodi dolores neque? Nobis veniam eius architecto ex numquam,
            saepe culpa necessitatibus doloremque vel blanditiis suscipit illum,
            voluptate recusandae, sint et.
          </p>
        </div>
        <div
          className={`flex justify-between **:rounded-sm gap-4 ${
            !img ? "hidden" : ""
          }`}
        >
          <div>
            <img src="./src/assets/img/land1.jpg" alt="" />
          </div>
          <div>
            <img src="./src/assets/img/land2.jpg" alt="" />
          </div>
        </div>
        <p className="text-stone-300 text-xs my-2">Today 7:32 am</p>
        <button className="w-fit p-2 bg-indigo-500 mb-4 text-white gap-2 flex items-center rounded-lg">
          <IconBtn icon="heart" style="text-white " />
          Like
        </button>
        <div
          id="comment"
          className={`flex py-4 gap-4 ${!comment ? "hidden" : ""}`}
        >
          <div className="w-[20%] bg-amber-50 h-fit rounded-full overflow-hidden">
            <img
              src="./src/assets/Img/profile_pic.jpg"
              className="object-cover aspect-square rounded-full"
            />
          </div>
          <p className="text-sm text-stone-300 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odit
            ratione aperiam nostrum deserunt laudantium a tempora soluta
            similique eligendi exercitationem dicta voluptatum eum vel nemo
            nobis, quas possimus incidunt?
          </p>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-col bg-stone-800 items-center justify-center gap-2 h-fit p-4 rounded-2xl">
      <img
        src="./src/assets/img/profile_pic.jpg"
        className="aspect-square object-cover rounded-full w-1/2"
      />
      <h2 className="text-2xl font-semibold">John Doe</h2>
      <p className="text-center text-stone-300">Frontend Developer</p>
      <div className="flex justify-center items-center gap-2 *:rounded-lg">
        <button className="text-sm p-2 bg-indigo-500">Follow</button>
        <button className="text-sm p-2 bg-indigo-500">Message</button>
      </div>
    </div>
  );
};

const Following = () => {
  return (
    <div className="flex flex-col p-4 bg-stone-800 rounded-2xl">
      <div className="flex justify-between items-center mb-2">
        <h2>Follwing</h2>
        <i class="fa-solid fa-ellipsis text-stone-300"></i>
      </div>
      <div>
        <div className="flex items-center gap-4 py-2">
          <img
            src="./src/assets/img/profile_pic.jpg"
            className="rounded-full aspect-square object-cover w-[30%]"
          />
          <div className="flex flex-col gap-2">
            <h2>Ashley Brigs</h2>
            <button className="w-fit p-2 border border-indigo-500 rounded-lg text-sm font-light text-indigo-500 bg-indigo-500/10">
              Unfollow
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 py-2">
          <img
            src="./src/assets/img/profile_pic.jpg"
            className="rounded-full aspect-square object-cover w-[30%]"
          />
          <div className="flex flex-col gap-2">
            <h2>Ashley Brigs</h2>
            <button className="w-fit p-2 border border-indigo-500 rounded-lg text-sm font-light text-indigo-500 bg-indigo-500/10">
              Unfollow
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 py-2">
          <img
            src="./src/assets/img/profile_pic.jpg"
            className="rounded-full aspect-square object-cover w-[30%]"
          />
          <div className="flex flex-col gap-2">
            <h2>Ashley Brigs</h2>
            <button className="w-fit p-2 border border-indigo-500 rounded-lg text-sm font-light text-indigo-500 bg-indigo-500/10">
              Unfollow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="flex flex-col p-4 bg-stone-800 rounded-2xl">
      <div className="flex justify-between items-center mb-2">
        <h2>Follwing</h2>
        <i class="fa-solid fa-ellipsis text-stone-300"></i>
      </div>
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <button className="w-full rounded-xl p-2 bg-indigo-400 mt-4">
        Load More
      </button>
    </div>
  );
};

const CryptoCard = ({ icon = "dollar-sign" }) => {
  return (
    <div className="flex flex-col p-4 bg-stone-800 rounded-2xl">
      <div className="flex justify-between">
        <h2 className="text-sm">Total balance</h2>
        <div className="p-2 bg-indigo-500/25 rounded-full flex justify-center items-center w-fit">
          <IconBtn icon={icon} style="text-indigo-500" />
        </div>
      </div>
      <h3 className="font-medium *:text-stone-400">
        $ 53,232 <span>3.21 BTC</span>
      </h3>
      <p className="text-sm text-stone-300">
        <span className="inline-block bg-stone-700 px-2 text-xs rounded-sm text-green-500">
          +6.15%
        </span>{" "}
        Since last week
      </p>
    </div>
  );
};

const Markets = () => {
  const data = [
    { coin: "BTC", price: "43.27", volume: "742.12", change: "+3.42" },
    { coin: "ETH", price: "12.83", volume: "529.44", change: "-1.27" },
    { coin: "SOL", price: "67.91", volume: "312.55", change: "+4.18" },
    { coin: "DOGE", price: "0.42", volume: "856.73", change: "+0.92" },
    { coin: "ADA", price: "1.93", volume: "478.35", change: "-0.74" },
    { coin: "XRP", price: "0.82", volume: "682.67", change: "+2.56" },
    { coin: "MATIC", price: "2.64", volume: "394.21", change: "-3.41" },
    { coin: "BNB", price: "85.37", volume: "915.48", change: "+1.89" },
    { coin: "ETH", price: "14.22", volume: "274.65", change: "+0.77" },
    { coin: "BTC", price: "55.73", volume: "647.83", change: "-2.95" },
    { coin: "SOL", price: "23.54", volume: "543.22", change: "+6.43" },
    { coin: "DOGE", price: "0.18", volume: "783.12", change: "-1.25" },
    { coin: "ADA", price: "1.28", volume: "238.74", change: "+4.92" },
    { coin: "XRP", price: "0.64", volume: "363.89", change: "+0.35" },
    { coin: "MATIC", price: "3.12", volume: "456.71", change: "-0.98" },
  ];

  function ChangeCell({value}) {
    const num = Number(String(value).replace(/^\+/, "").trim());
    const color = num >0 ? "text-green-500" : num<0? "text-red-500": "";
    return <span className={color}>{value}</span>
  }

  return (
    <div className="flex flex-col w-2/5 p-4 bg-stone-800 rounded-2xl">
      <div className="flex justify-between items-center mb-2">
        <h2>Markets</h2>
        <i class="fa-solid fa-ellipsis text-stone-300"></i>
      </div>
      <table className="flex flex-col">
        <th className="flex justify-between text-sm font-medium text-left py-2">
          <td>
            <IconBtn icon="star" size="sm" style="text-yellow-500" />
          </td>
          <td>Coin</td>
          <td>Price</td>
          <td>Volume</td>
          <td>Change</td>
        </th>
        {data.map((item) => {
          return (
            <td className="flex justify-between text-sm font-light text-left py-1">
              <td>
                <IconBtn icon="star" size="sm" style="text-yellow-500" />
              </td>
              <td>{item.coin}</td>
              <td>{item.price}</td>
              <td>{item.volume}</td>

              <td><ChangeCell value={item.change}/></td>
            </td>
          );
        })}
      </table>
    </div>
  );
};

export default Header;
export {
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
};
