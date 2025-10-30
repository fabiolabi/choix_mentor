import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Person from "./components/Person";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Person />} />
      </Routes>
    </Router>
  );
}

export default App;
