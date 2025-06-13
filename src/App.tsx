import React from 'react';
import './App.css';
import {ProductCard} from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <ProductCard
          title={'Model Y'}
          origin={'US'}
          price={84900}
          currency={'USD'}
          imageUrl={'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PPSW,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&'}
      />
    </div>
  );
}

export default App;
