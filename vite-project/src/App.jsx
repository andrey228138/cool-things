import { useState } from "react";
import Layout from "./components/Layout";
import Easy from "./pages/Easy";
import Normal from "./pages/Normal";
import Hard from "./pages/Hard";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [input, setInput] = useState();
  const objectLinks = [
    {
      path: "/",
      jsxElement: <Easy/>,
    },
    {
      path: "normal",
      jsxElement: <Normal/>,
    },
    {
      path: "hard",
      jsxElement: <Hard/>,
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        {objectLinks.map((objectLink) => (
          <Route
         
            path={objectLink.path}
            element={objectLink.jsxElement}
          />
        ))}
        </Route>
       
      </Routes>
    </>
  );
}

export default App;