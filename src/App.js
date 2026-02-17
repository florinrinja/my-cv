import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import './App.css';
import About from './components/About';
import Competences from './components/Competences';
import ExpEdu from './components/ExpEdu';
import WorksOne from './components/WorksOne';
import WorksTwo from './components/WorksTwo';
import WorksThree from './components/WorksThree';
import { Pagination } from 'react-bootstrap';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = number => {
    if(number === currentPage) return;
    setCurrentPage(number);
  };

  const handleBeforePageChange = page => {
    if(page === currentPage) return;
    setCurrentPage(page);
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 6; i++) {      
      pageNumbers.push(
        <Pagination.Item 
          key={i} 
          active={(i - 1) === currentPage} 
          activeLabel=""
          className="florin-rinja-page-item"
          onClick={() => handlePageChange(i-1, 'getPagesNumbers')}
        >
          {i}
        </Pagination.Item>,
      );
    }

    return [...pageNumbers];
  };
  
  const pagesNumbers = getPagesNumbers();

  return (
    <React.Fragment>
      <ReactPageScroller
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <About />
        <Competences />
        <WorksOne />
        <WorksTwo />
        <WorksThree />
        <ExpEdu />
      </ReactPageScroller>
      <Pagination className="pagination-additional-class" size="lg">
        {pagesNumbers}
      </Pagination>
    </React.Fragment>
  );
};

export default App;