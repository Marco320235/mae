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

      </Routes>
    </Router>
  );
}

export default App;
