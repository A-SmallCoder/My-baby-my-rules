import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery';
import NotFound from './containers/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Article from './containers/Article';
import Articles from './containers/Articles';
import Categories from './containers/Categories';
import Signin from './containers/Signin';
import AdminHero from './components/AdminHero';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import { getByDisplayValue } from '@testing-library/dom';
import AdminNav from './components/AdminNav';


library.add(fab);

function App() {

  return (
    
    <div className="App container">     
            
      <div id="bar" className="row">
        <div onClick={toggleMenu} className="float-right">
          <a className="closebtn pt-3 pr-4 pl-2">×</a>
        </div>
        
        <ul>
          <li onClick={toggleMenu}><Link to="/"><FontAwesomeIcon className="barIcon" icon={faHome}/> Home</Link><br/></li>
          <li onClick={toggleMenu}><Link to="/Articles"><FontAwesomeIcon className="barIcon" icon={faNewspaper}/> Articles</Link><br/></li>
          <li onClick={toggleMenu}><Link to="/Categories"><FontAwesomeIcon className="barIcon" icon={faList}/> Categories</Link><br/></li>
          <li onClick={toggleMenu}><Link to="/Signin"><FontAwesomeIcon className="barIcon" icon={faDoorOpen}/> Sign in</Link></li>
        </ul>
      </div>
      
            
      <div>
        {window.location.pathname.substring(0,7) === "/Admin_"?
          <AdminNav/>
        :
          <Header id="main"/>
        }

        <div>
          <p id="padding">This is the padding at the top of page for when the header scrolls</p>
        </div>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Articles" component={Articles} />
            <Route path="/Article" component={Article} />
            <Route path="/Categories" component={Categories} />
            <Route path="/Signin" component={Signin} />
            <Route path="/Admin_" component={AdminHero} />
            <Route component={NotFound} />
          </Switch>

        {window.location.pathname.substring(0,7) === "/Admin_"?   
          <span></span>
        :
          <Footer/>
        }
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
