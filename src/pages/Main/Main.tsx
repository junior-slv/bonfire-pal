import './Main.css';

import { Link } from "react-router-dom";

import darksouls from '../../assets/darksouls.jpg';
import darksouls2 from '../../assets/darksouls2.jpg';
import darksouls3 from '../../assets/darksouls3.jpg';

function Main() {
    return ( 
    <div className="container-main">
        <div className="menu-main">
            <div className="up-menu-main">
                <h1 className='text-main'>CHOOSE YOUR GAME! </h1>
            </div>
            <div className="bottom-menu">
            <Link to='/darksouls'><span className='span-main'><img className='img-main' src={darksouls} alt="darksouls" /></span></Link>
                <span className='span-main'><img className='img-main' src={darksouls2} alt="darksouls2" /></span>
                <span className='span-main'><img className='img-main' src={darksouls3} alt="darksouls3" /></span>
            </div>
        </div>
    </div> );
}

export default Main;