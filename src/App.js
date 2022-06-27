import './App.css';
import React from 'react';
import { NotConnected } from './components/notConnected.jsx'
import { useState } from "react";
import { Connected } from './components/connected.jsx'

function App() {

  const [accounts, setAccounts] = useState([]);

  if (accounts.length !== 0) {
    return (
      <div className="App">
        <Connected accounts={accounts} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <NotConnected accounts={accounts} setAccounts={setAccounts} />
      </div>

    );
  }

}

export default App;
