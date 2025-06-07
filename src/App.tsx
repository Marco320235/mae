import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explorar from "./pages/Explorar";
import Explorar2 from "./pages/Explorar2";
import Explorar3 from "./pages/Explorar3";
import Explorar4 from "./pages/Explorar4";
import Explorar5 from "./pages/Explorar5";
import Explorar6 from "./pages/Explorar6";
import Explorar7 from "./pages/Explorar7";
import Explorar8 from "./pages/Explorar8";
import Explorar9 from "./pages/Explorar9";
import Explorar10 from "./pages/Explorar10";
import Explorar11 from "./pages/Explorar11";
import Explorar12 from "./pages/Explorar12";
import Explorar13 from "./pages/Explorar13";
import Explorar14 from "./pages/Explorar14";
import Explorar16 from "./pages/Explorar16";
import Explorar17 from "./pages/Explorar17";

import Encerramento from "./pages/Encerramento";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/explorar2" element={<Explorar2 />} />
        <Route path="/explorar3" element={<Explorar3 />} />
        <Route path="/explorar4" element={<Explorar4 />} />
        <Route path="/explorar5" element={<Explorar5 />} />
        <Route path="/explorar6" element={<Explorar6 />} />
        <Route path="/explorar7" element={<Explorar7 />} />
        <Route path="/explorar8" element={<Explorar8 />} />
        <Route path="/explorar9" element={<Explorar9 />} />
        <Route path="/explorar10" element={<Explorar10 />} />
        <Route path="/explorar11" element={<Explorar11 />} />
        <Route path="/explorar12" element={<Explorar12 />} />
        <Route path="/explorar13" element={<Explorar13 />} />
        <Route path="/explorar14" element={<Explorar14 />} />
        <Route path="/explorar16" element={<Explorar16 />} />
        <Route path="/explorar17" element={<Explorar17 />} />
        <Route path="/encerramento" element={<Encerramento />} />
      </Routes>
    </Router>
  );
}

export default App;
