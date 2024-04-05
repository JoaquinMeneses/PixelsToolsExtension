import React from "react";
import Timers from "../components/Timers";
import TimerList from "../components/TimerList";

const App = () => {
  return (
    <main className="bg-black text-white min-w-80 min-h-[600px]">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Timers />
      <TimerList />
    </main>
  );
};

export default App;
