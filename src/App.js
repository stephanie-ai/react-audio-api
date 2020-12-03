import React, { Component } from 'react';
import Header from './layout/Header/index.js';
import Home from './pages/Home/index.js';
import './style.css';

class App extends Component {
    render() {
        return ( 
            <div>
            <header>
                <Header />
            </header>
            <main className="main">
                <Home />
            </main>
            </div>
        )
    }
}

export default App;