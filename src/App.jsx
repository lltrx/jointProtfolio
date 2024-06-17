import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main.jsx";
import Project from "./pages/Project.jsx";


function App() {

    return (
      <Router>
        <Routes>
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>

);
}

export default App;