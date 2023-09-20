
import React from 'react';
import Dashboard from './components/primarydashboard';
import Transactions from './components/transactionbar';
import Sidebar from './components/sidebar';
import Header from "./components/header";
import './App.css'

function App() {
  return (
    <div>
      <Dashboard />
      <Transactions />
      <Header />
      <Sidebar/>
    </div>
  );
}

export default App;