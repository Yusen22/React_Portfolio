
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/HomePage'
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
