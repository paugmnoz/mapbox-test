import React from 'react';
import './App.scss';
import MapPage from './containers/MapPage';
function App() {
  return (
    <div className="App">
      {
        // <MapPage />
      }
      <div className='maptool'>
        <span className='weather-icon'>
          <img src='https://image.flaticon.com/icons/svg/2121/2121548.svg' alt=''/>
        </span>
      </div>
    </div>
  );
}

export default App;
