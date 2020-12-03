import React, { Component } from 'react';
import Header from './layout/Header/index.js';
import Home from './pages/Home/index.js';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        }
    };
   
    componentDidMount(){
        console.log('Did mount')
    };

    componentDidUpdate(){
        console.log('Did update')
    };
    
    // searchArtist(artistName) {
    //     ArtistSearchAPI.searchArtist(artistName).then((artists) => {
    //         this.setState({ artists: artists })
    //     }
    // };

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