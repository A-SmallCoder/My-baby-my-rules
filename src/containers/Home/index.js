import Hero from '../../components/Hero';
import Left from '../../components/Left';
import Card from '../../components/UI/Card/Index';
import Slider from '../../components/UI/Slider';
import './style.css';

var Home = props =>{
    return(
        <div className="container">
            <Slider/>
            <hr/>
            <Hero>
                <Left>
                    <a href="#">
                        <h2>Read articles</h2>
                    </a>
                    
                    <div className="container">
                        <div className="row ">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    
                </Left>
            </Hero>
            

        </div>
    );
}

export default Home;