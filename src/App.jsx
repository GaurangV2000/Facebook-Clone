import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Log_in from "./Log_in";
import { useStateValue } from "./StateProvider";

const App = () => {
  const [{user} , dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <h1>
          <Log_in />
        </h1>
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />

            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
