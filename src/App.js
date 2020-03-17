import React from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import WhiteBoard from './components/WhiteBoard';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/bootstrap/dist/css/bootstrap-grid.min.css';

function App() {
  return (
      <div className = "App" >
        <WhiteBoard/>
      </div>
  );
}

export default App;