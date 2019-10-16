import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Home, Detail } from 'pages';


function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">home</Link> | <Link to="/detail">detail</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
    </div>
  );
}

export default App;
