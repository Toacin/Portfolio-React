import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Header from './Components/Header/header'
import BodyTop from './Components/BodyTop/bodyTop'
import BodyNav from './Components/BodyNav/BodyNav'
import AboutMe from './Components/AboutMe/AboutMe'
import ProjectWrapper from './Components/ProjectWrapper/ProjectWrapper';
import { useState } from 'react';

function App() {
  let [page, setPage] = useState('About Me');

  let pageSwapHandler = (whichPage) => {
    setPage(whichPage);
  }

  let renderInfo = () => {
    switch(page) {
      case 'About Me': return <AboutMe/>;
      case 'Projects': return <ProjectWrapper/>;
      case 'Resume': return <AboutMe/>;
      case 'Contact Me': return <AboutMe/>;
    }
  }

  return (
    <main>
      <Header/>
      <BodyTop/>
      <BodyNav page={page} pageSwapHandler={pageSwapHandler}/>
      {renderInfo()}
      {/* <AboutMe/> */}
    </main>
  )
}

export default App;
