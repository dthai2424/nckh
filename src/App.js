import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./Land.jsx";
function App() {
  return (
    <div className="App w-[1170px] m-auto pt-5">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Land />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
