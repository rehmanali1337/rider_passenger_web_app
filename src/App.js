import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Requests } from './pages/Requests'
import { SignUp } from './pages/SignUp'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/requests">
            <Requests />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
