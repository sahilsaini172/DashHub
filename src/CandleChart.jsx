import IconBtn from "./Components.jsx"

function CandleChart({
  title = "LTC/BTC",
  candles = [
    { time: "Jul '22", open: 53.8, high: 56.2, low: 51.9, close: 53.3 },
    { time: "", open: 53.1, high: 54.9, low: 52.1, close: 52.7 },
    { time: "", open: 52.6, high: 53.0, low: 49.0, close: 49.2 },
    { time: "", open: 49.0, high: 50.1, low: 48.0, close: 52.4 },
    { time: "", open: 52.6, high: 55.0, low: 51.9, close: 57.1 },
    { time: "2023", open: 56.0, high: 60.8, low: 55.7, close: 60.2 },
    { time: "", open: 57.0, high: 58.2, low: 56.6, close: 57.0 },
    { time: "", open: 58.2, high: 62.1, low: 57.5, close: 60.0 },
    { time: "Jul '23", open: 58.0, high: 59.0, low: 53.2, close: 54.1 },
    { time: "", open: 55.0, high: 61.7, low: 54.6, close: 58.0 },
    { time: "", open: 58.0, high: 63.9, low: 57.4, close: 61.2 },
    { time: "2024", open: 60.5, high: 61.0, low: 56.8, close: 57.0 },
    { time: "", open: 57.2, high: 62.0, low: 56.1, close: 59.6 },
    { time: "Jul '24", open: 58.7, high: 59.9, low: 54.0, close: 55.1 },
    { time: "", open: 55.2, high: 62.0, low: 53.0, close: 61.7 },
    { time: "", open: 61.7, high: 64.2, low: 60.5, close: 62.4 },
  ],
  intervals = ["1m", "5m", "30m", "1h", "1d"],
  activeInterval = "5m",
  minY,
  maxY,
}) {
  if (!candles.length)
    return (
      <EmptyState
        title={title}
        intervals={intervals}
        activeInterval={activeInterval}
      />
    );

  // Compute bounds
  const yMin = Number.isFinite(minY)
    ? minY
    : Math.min(...candles.map((c) => c.low)) - 1;
  const yMax = Number.isFinite(maxY)
    ? maxY
    : Math.max(...candles.map((c) => c.high)) + 1;

  // Layout
  const padding = { top: 12, right: 24, bottom: 28, left: 48 };
  const width = 920;
  const height = 380;
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;

  const scaleX = (i) => padding.left + (i + 0.5) * (plotW / candles.length);
  const scaleY = (v) => padding.top + (1 - (v - yMin) / (yMax - yMin)) * plotH;

  // Y grid ticks
  const ticks = 6;
  const yTicks = Array.from({ length: ticks }, (_, i) => {
    const v = yMin + (i * (yMax - yMin)) / (ticks - 1);
    return { y: scaleY(v), v: Number(v.toFixed(2)) };
  });

//   <div className="flex justify-between items-center mb-2">
//         <h2>Markets</h2>
//         <i class="fa-solid fa-ellipsis text-stone-300"></i>
//       </div>
  return (
    <div className="w-full rounded-2xl bg-stone-800 text-white shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2>{title}</h2>

        <div className="flex items-center gap-2">
          {/* timeframe pills */}
          <div className="flex items-center gap-1 rounded-md bg-stone-700 p-1">
            {intervals.map((it) => (
              <button
                key={it}
                className={[
                  "rounded px-2 py-1 text-sm",
                  it === activeInterval
                    ? "bg-indigo-500 text-white"
                    : "text-stone-50 hover:bg-stone-600",
                ].join(" ")}
                // onClick={() => ... hook up state if needed}
              >
                {it}
              </button>
            ))}
          </div>

          {/* toolbar icons (placeholders) */}
          <div className="ml-2 flex items-center gap-2 text-gray-500">
            <IconPlus />
            <IconMinus />
            <IconSearch />
            <IconHand />
            <IconHome />
            <IconMenu />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2 pb-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-[420px] w-full">
          {/* background */}
          <rect x="0" y="0" width={width} height={height} fill="#fff" />

          {/* grid + y labels */}
          {yTicks.map((t, idx) => (
            <g key={idx}>
              <line
                x1={padding.left}
                x2={width - padding.right}
                y1={t.y}
                y2={t.y}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <text
                x={padding.left - 8}
                y={t.y + 4}
                textAnchor="end"
                className="fill-gray-500 text-[10px]"
              >
                {t.v.toFixed(2)}
              </text>
            </g>
          ))}

          {/* x axis baseline */}
          <line
            x1={padding.left}
            x2={width - padding.right}
            y1={height - padding.bottom}
            y2={height - padding.bottom}
            stroke="#E5E7EB"
            strokeWidth="1"
          />

          {/* candles */}
          {candles.map((c, i) => {
            const x = scaleX(i);
            const yHigh = scaleY(c.high);
            const yLow = scaleY(c.low);
            const yOpen = scaleY(c.open);
            const yClose = scaleY(c.close);
            const isUp = c.close >= c.open;

            const bodyTop = isUp ? yClose : yOpen;
            const bodyBottom = isUp ? yOpen : yClose;
            const bodyH = Math.max(2, bodyBottom - bodyTop);
            const bodyW = Math.max(6, (plotW / candles.length) * 0.6);
            const color = isUp ? "#16A34A" : "#EF4444"; // green/red

            return (
              <g key={i}>
                {/* wick */}
                <line
                  x1={x}
                  x2={x}
                  y1={yHigh}
                  y2={yLow}
                  stroke={color}
                  strokeWidth="2"
                />
                {/* body */}
                <rect
                  x={x - bodyW / 2}
                  y={bodyTop}
                  width={bodyW}
                  height={bodyH}
                  fill={color}
                  rx="1"
                />
              </g>
            );
          })}

          {/* sparse time labels */}
          {candles.map((c, i) =>
            i % Math.ceil(candles.length / 6) === 0 ? (
              <text
                key={`t-${i}`}
                x={scaleX(i)}
                y={height - 8}
                textAnchor="middle"
                className="fill-gray-500 text-[10px]"
              >
                {c.time}
              </text>
            ) : null
          )}
        </svg>
      </div>
    </div>
  );
}

function EmptyState({ title, intervals, activeInterval }) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-gray-100 p-1">
            {intervals.map((it) => (
              <button
                key={it}
                className={[
                  "rounded px-2 py-1 text-sm",
                  it === activeInterval
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-white",
                ].join(" ")}
              >
                {it}
              </button>
            ))}
          </div>
          <div className="ml-2 flex items-center gap-2 text-gray-500">
            <IconPlus />
            <IconMinus />
            <IconSearch />
            <IconHand />
            <IconHome />
            <IconMenu />
          </div>
        </div>
      </div>
      <div className="px-4 pb-6 text-sm text-gray-500">
        Provide candles prop to render chart.
      </div>
    </div>
  );
}

/* Icons */
function IconPlus() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path strokeWidth="2" d="M12 5v14M5 12h14" />
    </svg>
  );
}
function IconMinus() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path strokeWidth="2" d="M5 12h14" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="M21 21l-3.5-3.5" strokeWidth="2" />
    </svg>
  );
}
function IconHand() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeWidth="2"
        d="M8 13V7a2 2 0 1 1 4 0v4M12 11V6a2 2 0 1 1 4 0v5M16 11V8a2 2 0 1 1 4 0v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1"
      />
    </svg>
  );
}
function IconHome() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path strokeWidth="2" d="M3 11l9-8 9 8M5 10v10h14V10" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default CandleChart;
