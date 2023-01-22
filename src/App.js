import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
