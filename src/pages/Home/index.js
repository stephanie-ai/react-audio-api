import React, { Component } from 'react';

class Home extends Component {
// constructor(props) {
    //     super(props)
    //     this.state = {
    //         artists: []
    //     }
    // };
    
    state = {
        artistName: ""
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
            <>
                <h1>Render button here</h1>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" name="name" placeholder="Search for an Artist" onChange={this.handleInputChange} />
                        <input type="submit" id="submit" value="Search" />
                    </form>
                </div>
            </>
        )
    }
}

export default Home;