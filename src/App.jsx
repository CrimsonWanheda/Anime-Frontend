import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Footer from './components/Footer.jsx';
import PageAnime from './components/pages/PageAnime.jsx';
import Login from './components/pages/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/anime/:animeId" component={PageAnime}/>
            <Route exact path="/login" component={Login}/>
            {/* <Route exact path="/join" component={SingIn}/> */}
            <Route exact path="*" component={NotFound}/>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;