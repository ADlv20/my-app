import React from 'react';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  return (
    <div className='App'>
       <Navbar />
       <div className='content'>
          <Home />
      </div>
      <iframe src="https://drive.google.com/file/d/1GkBsVNDn2kjWT-1XxznIBFaFtLeO3tPE/preview" width="640" height="480" allow="autoplay"></iframe>
      
    </div>

  );
}

export default App;
