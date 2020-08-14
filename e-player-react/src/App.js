import React from 'react';
import Image from './components/Image';
import MusicInfo from './components/MusicInfo';
import Buttons from './components/Buttons';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Image  />
      <MusicInfo />
      <ProgressBar />
      <Buttons />
      </div>
  );
}

export default App;
