import React from 'react';
import { Footer } from './components/Footer'
import { Logo } from './components/Logo'
import { Main } from "./components/Main"
import './app.css';

function App() {
  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
