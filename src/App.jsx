import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main.jsx";
import Project from "./pages/Project.jsx";
import Projects from "./pages/Projects.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {

    return (
      <Router>
        <Routes>
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

);
}

export default App;