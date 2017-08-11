import React, { Component } from 'react';
import Home from './components/HomePages/Home';
import RouteHome from './components/HomePages/RouteHome';
import Footer from './components/Footers/Footer';
// import Content from './components/Contents/Content';
// import ContentRoute from './components/Contents/ContentRoute';

// import RouteStore from './components/Stores/RouteStore'
// import Store from './components/Stores/Store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Content/>
      <ContentRoute/>*/}

        {/*<Store/>
        <RouteStore/>*/}
        <Home />
        <RouteHome />
        <Footer />
      </div>
    );
  }
}
export default App;
