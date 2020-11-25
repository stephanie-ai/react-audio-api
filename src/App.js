import React, { Component } from 'react';
import Greeting from './components/Greeting';

class App extends React.Component {
    render() {
      return (
          <main>
              <Greeting />
          </main>
      );
    }
}

export default App;