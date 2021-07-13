import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Requests } from './pages/Requests'
import { SignUp } from './pages/SignUp'
import { PostRide } from './pages/PostRide'
import { OfferRide } from './pages/OfferRide'
import { OfferedRides } from "./pages/OfferedRides";
import { MyRides } from './pages/MyRides'
import { About } from './pages/About'
import { Contact } from "./pages/Contact";
import { TermsAndConditions } from "./pages/TermsAndConditions";
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
          <Route path="/offer_ride">
            <OfferRide />
          </Route>
          <Route path="/offered_rides">
            <OfferedRides />
          </Route>
          <Route path="/my_rides">
            <MyRides />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact_us">
            <Contact />
          </Route>
          <Route path="/terms">
            <TermsAndConditions />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
