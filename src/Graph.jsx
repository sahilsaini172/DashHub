const BarChart = () => {
  const data = [
    {
      language: "en-us",
      users: 735,
      percent: 43,
    },
    {
      language: "en-gb",
      users: 223,
      percent: 27,
    },
    {
      language: "fr-fr",
      users: 181,
      percent: 22,
    },
    {
      language: "es-es",
      users: 131,
      percent: 16,
    },
    {
      language: "en-us",
      users: 118,
      percent: 15,
    },
    {
      language: "ru-ru",
      users: 98,
      percent: 13,
    },
  ];

  return (
    <section className="flex flex-col w-full p-4 bg-stone-800 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h2>Language</h2>
        <i class="fa-solid fa-ellipsis text-stone-300"></i>
      </div>
      <table className="flex flex-col text-sm text-stone-300">
        <tr className="flex justify-between font-medium text-left py-2">
          <th className="w-1/5">Language</th>
          <th className="w-1/5">Users</th>
          <th className="w-3/5">% Users</th>
        </tr>
        {data.map((item) => {
          return (
            <tr className="py-4 border-b-1 border-b-stone-700 flex justify-between">
              <td className="w-1/5">{item.language}</td>
              <td className="w-1/5">{item.users}</td>
              <td className="w-3/5 bg-stone-700 rounded-md overflow-hidden">
                <div
                  className={`bg-indigo-500 text-center`}
                  style={{ width: `${item.percent}%` }}
                >
                  {item.percent}%
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default BarChart;
