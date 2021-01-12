import Hero from '../../components/Hero';
import Left from '../../components/Left';
import Card from '../../components/UI/Card/Index';
import Slider from '../../components/UI/Slider';
import './style.css';

var Home = props =>{
    return(
        <div>
            <Slider/>
            <hr/>
            <Hero>
                <Left>
                    <a href="#">
                        <h2>Read articles</h2>
                    </a>
                    
                    <div className="container d-flex justify-content-center">
                        <div className="row justify-content-around">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <a id="more" href="#">more...</a>
                    </div>

                    <hr/>
                    <a href="#">
                        <h2>Categories</h2>
                    </a>
                    
                    <div className="d-flex flex-column" id="categories">
                        <div className="row">
                            <p>Tips and tricks</p>
                            <p>So relatable</p>
                            <p>Cures and remedies</p>
                            <p>Bumps and rashes</p>
                        </div>                        
                    </div>

                    <div className="row d-flex justify-content-center">
                        <a id="morec" href="#">more categories</a>
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
                            
                            <button type="submit" className="btn btn-primary float-right">Submit</button>

                        </form>
                    </div>
                    
                </Left>
            </Hero>
            

        </div>
    );
}

export default Home;