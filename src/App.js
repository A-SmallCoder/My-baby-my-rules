import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Header from './components/Header'
import Home from './containers/Home';

function App() {
  return (
    <div className="App container">

      <div id="bar" className="row">
        <div onClick={toggleMenu} className="float-right">
          <a href="javascript:void(0)" class="closebtn">×</a>
        </div>
        
        <ul>
          <li><a href="#">Articles</a><br/></li>
          <li><a href="#">Categories</a><br/></li>
          <li><a href="#">Contact us</a><br/></li>
          <li><a href="#">Sign in</a></li>
        </ul>
                    
      </div>

      <div id="myAppContainer">
        <Header id="main"/>
        <div>
          <p id="padding">This is the padding at the top of page</p>
        </div>

        <Home />
      </div>
      
      
      
    </div>
  );
}

function toggleMenu() {
  if($("#bar").css("width") == "0px"){
      $("#bar").css("width","400px");
  }else{
      $("#bar").css("width","0px");
  }
}

export default App;
