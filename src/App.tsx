import './app.css';

import darksouls from './assets/darksouls.jpg';
import darksouls2 from './assets/darksouls2.jpg';
import darksouls3 from './assets/darksouls3.jpg';

function App() {
    return ( 
    <div className="container">
        <div className="menu">
            <div className="up-menu">
                <h1>CHOOSE YOUR GAME! </h1>
            </div>
            <div className="bottom-menu">
                <span><img src={darksouls} alt="" /></span>
                <span><img src={darksouls2} alt="" /></span>
                <span><img src={darksouls3} alt="" /></span>
            </div>
        </div>
    </div> );
}

export default App;