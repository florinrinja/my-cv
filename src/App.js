import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import './App.css';
import About from './components/About';
import Competences from './components/Competences';
import ExpEdu from './components/ExpEdu';
import WorksOne from './components/WorksOne';
import WorksTwo from './components/WorksTwo';
import WorksThree from './components/WorksThree';

const App = () => {

  return (
    <div className='appJs' >
      <ReactPageScroller >
        <About />
        <Competences />
        <WorksOne />
        <WorksTwo />
        <WorksThree />
        <ExpEdu />
      </ReactPageScroller>
    </div>
  );
}

export default App;