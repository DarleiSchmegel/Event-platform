import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

function App() {
  return (
    <Event/>
    // <div>
    //   <Header />
    //   <Sidebar />
    //   <Video />
    //   <Lesson />
    // </div>
  );
}

export default App;
