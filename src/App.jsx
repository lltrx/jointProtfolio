import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main.jsx";
import Archive from "./pages/Archive.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {

    return (
      <Router>
        <Routes>
          <Route path="/archive" element={<Archive />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

);
}

export default App;