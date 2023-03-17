import Home from './pages/Home/Home';
import Second from './pages/Second Page/Second';
import Third from './pages/Third Page/Third';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<Second />} />
        <Route path="/second" element={<Third />} />
      </Routes>

      
    </div>
  );
}

export default App;
