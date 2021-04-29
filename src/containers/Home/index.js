import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../../actions';
import Hero from '../../components/Hero';
import Left from '../../components/Left';
import Card from '../../components/UI/Card/Index';
import Slider from '../../components/UI/Slider';
import './style.css';

var Home = props =>{
    const counter = useSelector(state => state.counterReducer);
    const logged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch();

    return(
        <div>
            <Slider/>
            <hr/>
            <Hero>
                <Left>
                    <a href="#">
                        <h2 className="mainLink">Read articles</h2>
                    </a>
                                        
                    <div className="container d-flex justify-content-center">
                        <div className="row justify-content-around">
                            <Link to="/Article">
                                <Card/>
                            </Link>
                            
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <Link to="./Articles"><span id="more">more...</span></Link>
                    </div>

                    <hr/>
                    <a href="#">
                        <h2 className="mainLink">Categories</h2>
                    </a>
                    
                    <div className="d-flex flex-column" id="categories">
                        <div className="row">
                            <a href="#"><p>Tips and tricks</p></a>
                            <a href="#"><p>So relatable</p></a>
                            <a href="#"><p>Cures and remedies</p></a>
                            <a href="#"><p>Bumps and rashes</p></a>
                        </div>                        
                    </div>

                    <div className="row d-flex justify-content-center">
                        <Link to="./Categories"><span id="morec">more categories</span></Link>
                    </div>
                    
                    {/*contact*/}
                    <div id="contact">
                        <h3>Contact us</h3>

                        <form>
                            <div className="form-group">
                                <label for="name">Name</label><br/>
                                <input type="text" className="form-control" id="name" placeholder="John Doe"/>
                            </div>

                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email@example.com"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label for="comment">Comment</label>
                                <textarea className="form-control" rows="4" id="comment"></textarea>
                            </div>

                            <p>
                                counter {counter}
                            </p>
                            {counter >= 10 ? <p> greater than or equal 10</p> : <p>less than 10</p>}
                            
                            <button type="button" onClick={()=>dispatch(increment(5))} className="btn btn-primary float-right">Submit</button>

                        </form>
                    </div>
                    
                </Left>
            </Hero>
            

        </div>
    );
}

export default Home;