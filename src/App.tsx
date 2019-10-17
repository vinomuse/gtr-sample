import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Detail } from 'pages';
import Header from 'components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/detail/:name" component={Detail} />
    </div>
  );
}

export default App;
