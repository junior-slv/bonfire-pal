import './darksouls.css';
import circleup from '../../assets/circle-up.png'


function Darksouls() {
    return ( 
        <div className="container-darksouls">
            <div className="menu-darksouls">
                <div className="title-darksouls">
                    <h1>THE DARK SOUL ACHIEVEMENT OVERALL: 100%</h1>
                </div>
                <div className="knight">
                    <h2>Knight's honor: 100% <input  type="checkbox"  id="arrow" /></h2> 
                    <p>Regular upgrade from 0 to +5 requires 135 
                        <a target="_blank" href="https://darksouls.wiki.fextralife.com/Titanite+Shard"> Titanite shard</a></p>
                    <p>Regular upgrade from +5 to +10 requires a Large Ember and 135 
                        <a target="_blank" href="https://darksouls.wiki.fextralife.com/Large+Titanite+Shard"> Large Titanite Shard</a></p>
                    <form className='soul-honor'>
                        <div className="souls-weapons">
                            <h3>Soul's weapons</h3>
                            <p><input type="checkbox" />Moonlight Butterfly Horn</p>
                            <p><input type="checkbox" />Crystal Ring Shield</p>
                            <p><input type="checkbox" />Quelaag's Furysword</p>                        
                            <p><input type="checkbox" />Chaos Blade</p>
                            <p><input type="checkbox" />Great Sword of Artorias (Cursed)</p>
                            <p><input type="checkbox" />Great Sword of Artorias</p>
                            <p><input type="checkbox" />G.Shield of Artorias</p>
                            <p><input type="checkbox" />Golem Axe</p>
                            <p><input type="checkbox" />Dragon Bone Fist</p>
                            <p><input type="checkbox" />Lifehunt Scythe</p>
                            <p><input type="checkbox" />Dragonslayer Spear</p>
                            <p><input type="checkbox" />Smough's Hammer</p>
                            <p><input type="checkbox" />Darkmoon Bow</p>
                            <p><input type="checkbox" />The Darkmoon Catalyst</p>
                            <p><input type="checkbox" />Great Lord Greatsword</p>
                        </div>
                        <div className="soul-used">
                            <h3>Soul's used</h3>
                            <p>Moonlight Butterfly</p>
                            <p>Moonlight Butterfly</p>
                            <p>Quelaag</p>
                            <p>Quelaag</p>
                            <p>Sif</p>
                            <p>Sif</p>
                            <p>Sif</p>
                            <p>Iron Golem</p>
                            <p>Iron Golem</p>
                            <p>Priscilla</p>
                            <p>Ornstein</p>
                            <p>Smough</p>
                            <p>Gwyndolin</p>
                            <p>Gwyndolin</p>
                            <p>Gwyn</p>
                        </div>
                        <div className="weapon-used">
                            <h3>You also need a +10 ...:</h3>
                            <p>Spear</p>
                            <p>Shield</p>
                            <p>Curved sword</p>
                            <p>Katana</p>
                            <p>Dagger</p>
                            <p>Broken straight sword</p>
                            <p>Shield</p>
                            <p>Axe</p>
                            <p>Fist</p>
                            <p>Halberd</p>
                            <p>Spear</p>
                            <p>Hammer</p>
                            <p>Bow</p>
                            <p>Catalyst</p>
                            <p>Dagger</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}


export default Darksouls;