import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Requests } from './pages/Requests'
import { SignUp } from './pages/SignUp'
import { PostRide } from './pages/PostRide'
import '@fontsource/roboto';
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { makeStyles } from '@material-ui/core'



function App() {
  const AppContext = useContext(GlobalContext)
  const useStyles = makeStyles({
    app: {
      backgroundColor: AppContext.Colors.pageBackground,
      // height: '100%',
      textAlign: 'center',
      background: 'linear-gradient(to right bottom, #fff, #ff7600)',
    }
  })
  const classes = useStyles()
  return (
    <div className={classes.app}>
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
          <Route path="/post_request">
            <PostRide />
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
