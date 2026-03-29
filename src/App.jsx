import Dock from '#Components/Dock';
import Welcome from '#Components/Welcome';
import Navbar from '#Components/Navbar';
import React from 'react';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Dock/>
    </div>
  );
}

export default App;




