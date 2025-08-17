import DefaultDashboard, {
  AnalyticsDashboard,
  SocialDashboard,
  SaasDashboard,
} from "./Screens.jsx";
import Header from "./Components.jsx";
import { useState } from "react";

function App() {
  let [screen, setScreen] = useState("default");

  function renderScreen() {
    switch (screen) {
      case "analytics":
        return <AnalyticsDashboard />;
      case "saas":
        return <SaasDashboard />;
      case "social":
        return <SocialDashboard />;
      default:
        return <DefaultDashboard />;
    }
  }
  return (
    <div className="h-screen">
      <header className="flex justify-between items-center p-3 text-xs text-neutral-300">
        <button onClick={() => setScreen("default")}>Default</button>
        <button onClick={() => setScreen("analytics")}>Analytics</button>
        <button onClick={() => setScreen("saas")}>SaaS</button>
        <button onClick={() => setScreen("social")}>Social</button>
      </header>
      <Header />
      {renderScreen()}
    </div>
  );
}

export default App;
