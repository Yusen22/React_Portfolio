
import './App.css';
import ProjectPage from './components/ProjectPage';
import { hashRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './components/Project';

function App() {
  return (
    <div>
      {/* <h1>Hello</h1> */}
     <ProjectPage></ProjectPage>
    </div>

  );
}

export default App;
