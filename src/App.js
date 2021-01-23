import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './containers/Home';
import Article from './containers/Article';
import Articles from './containers/Articles';
import Categories from './containers/Categories';
import Signin from './containers/Signin';
import { Link, Route, Router, Switch } from 'react-router-dom';


library.add(fab);

function App() {
  return (
    <div className="App container">

      <div id="bar" className="row">
        <div onClick={toggleMenu} className="float-right">
          <a className="closebtn">×</a>
        </div>
        
        <ul>
          <li onClick={toggleMenu}><Link to="/">Home</Link><br/></li>
          <li onClick={toggleMenu}><Link to="/Articles">Articles</Link><br/></li>
          <li onClick={toggleMenu}><Link to="/Categories">Categories</Link><br/></li>
          <li onClick={toggleMenu}><Link to="/Signin">Sign in</Link></li>
        </ul>
      </div>

      <div>
        <Header id="main"/>
        <div>
          <p id="padding">This is the padding at the top of page</p>
        </div>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Articles" component={Articles} />
            <Route path="/Categories" component={Categories} />
            <Route path="/Signin" component={Signin} /> 
          </Switch>
        <Footer/>
      </div>
    </div>
  );
}

function toggleMenu() {
  if($("#bar").css("width") === "0px"){
      $("#bar").css("width","400px");
  }else{
      $("#bar").css("width","0px");
  }
}

export default App;
