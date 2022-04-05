import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  );
}

export default App;
