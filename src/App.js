import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import CampsitesList from './features/campsites/CampsitesList';
import './App.css';



function App() {
    return (
        <div className='App'>
          <Header/>
          <CampsitesList/>
          <Footer/>
        </div>
    );
}

export default App;