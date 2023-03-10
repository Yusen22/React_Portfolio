
import './App.css';
import Homepage from './components/Homepage'
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import Header from './components/Header'

function App() {
  return (
    <>
   
        <Header/>
        <Routes>
          <Route path="/" element= {<Homepage/>}/>
          <Route path="projects" element= {<ProjectPage/>}/>
          <Route path="contact" element= {<Contact/>}/>
        </Routes>
        
    
    </>

  );
}

export default App;
