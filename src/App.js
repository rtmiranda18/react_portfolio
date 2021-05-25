import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import './components/styles/style.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <div className="app-left">
          <Navigation />
        </div>
        <div className="app-right">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
          </div>
      </div>
    </Router>
  );
}

export default App;

