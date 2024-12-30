import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Books } from "./components/books";
import { NotFound } from "./components/notfound";
import { LogIn } from "./components/Login";
import { Dashboard } from "./components/dashboard";
import { Superhero } from "./components/superhero";
import { Effect } from "./components/effect";
import { useState } from "react";
import { Email } from "./components/email";

const Superheroes = [
  { id: "1", name: "Shaktiman" },
  { id: 2, name: "Bhaktimaan" },
  { id: 3, name: "chatnimaan" },
];

function App() {
  const [flag, setflag] = useState(true);
  const [userid, setuserid] = useState(1);

  return (
    <div className="App">
      {/* *************Routing******************* */}
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes> */}
      {/* ***********************Routing******************************** */}
      {/* ***********************Superhero*************************** */}
      {/* <Superhero namesofheroes={Superheroes} /> */}

      {/* **************Effects**************************************** */}
      {/* <button onClick={() => setflag(!flag)}>Toggle</button>
      {flag && <Effect />} */}

      {/* *************Email************** */}
      <input
        type="number"
        value={userid}
        onChange={(e) => setuserid(e.target.value)}
      />
      <Email userId={userid} />
    </div>
  );
}

export default App;
