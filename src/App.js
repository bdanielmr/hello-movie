/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import ViewsRouter from './router';
import StoreProvider from './store/StoreProvider';
import logo from './img/hellomovielogo.svg';
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <header
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            display: 'flex',
            width: '100%',
            height: '55px',
            background: 'rgba(3, 37, 65, 1)',
            zIndex: '99999',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', width: '60%' }}>
              <img width="180px" src={logo} />
            </div>
          </div>
        </header>
        <ViewsRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
