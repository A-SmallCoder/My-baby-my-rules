import Hero from '../../components/Hero';
import Left from '../../components/Left';
import Right from '../../components/Right';
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
                </Left>
            </Hero>
            

        </div>
    );
}

export default Home;