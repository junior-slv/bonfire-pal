import './darksouls.css';
// import circleup from '../../assets/circle-up.png'
import styled from 'styled-components'
import { useState } from 'react';
import React from 'react';

const ToggleSwitch : any = ({
    checked,
    label,
    id,
    disabled,
    ariaInvalid,
    ariaLabelledby,
    onChange,
  }) => {
    return (
      <>
        <label htmlFor={id} className="ToggleSwitch ToggleSwitch_label">
          {label}
          <span className="ToggleSwitch_switch">
            <input
              type="checkbox"
              checked={checked}
              id={id}
              className="ToggleSwitch_checkbox"
              disabled={disabled}
              onChange={onChange}
              aria-invalid={ariaInvalid}
              aria-labelledby={ariaLabelledby}
            />
            <span className="ToggleSwitch_slider" />
          </span>
        </label>
      </>
    );
  };

var Knight = styled.div`

    height: 5vh;
    width: 100%;
    overflow: hidden;
`



const Darksouls = () => {
    const [selected1, setSelected1] = useState(localStorage.getItem('toggle-switch-1') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected3, setSelected3] = useState(localStorage.getItem('toggle-switch-3') === 'true');
    const [selected4, setSelected4] = useState(localStorage.getItem('toggle-switch-4') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');

      
    const [checked, setChecked] = useState(true);
    if(checked === true){
        Knight = styled.div`

        height: 259vh;
        width: 100%;
        overflow: hidden;
    `
    }
    if(checked === false){
        Knight = styled.div`

    height: 5vh;
    width: 100%;
    overflow: hidden;
`
    }



    return ( 
        <div className="container-darksouls">
            <div className="menu-darksouls">
                <div className="title-darksouls">
                    <h1>THE DARK SOUL ACHIEVEMENT OVERALL: 100%</h1> 
                </div>
                <Knight>
                    <h2>Knihght's honor <input type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      /></h2>
                    <div className="souls-weapons">
                        <div className="div1">Soul Weapons</div>
                        <div className="div2">Soul Used:</div>
                        <div className="div3">You also need a +10 ...:</div>
                        <div className="div4"> <ToggleSwitch checked={selected1} id='toggle-switch-1'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-1',`${e.target.checked}`);
                                    setSelected1(e.target.checked);
                                    console.log(e.target.checked)
                                }
                                } /> M.L. Butterfly Horn</div>
                        <div className="div5">Moonlight Butterfly</div>
                        <div className="div6">Spear/Thrusting Sword</div>
                        <div className="div7"><ToggleSwitch checked={selected2} id='toggle-switch-2'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-2',`${e.target.checked}`);
                                    setSelected2(e.target.checked);
                                    console.log(e.target.checked)
                                }
                                } />Crystal Ring Shield</div>
                        <div className="div8">Moonlight Butterfly</div>
                        <div className="div9">Shield</div>
                        <div className="div10">Quelaag's Furysword</div>
                        <div className="div11">Quelaag</div>
                        <div className="div12">Curved Sword</div>
                        <div className="div13">Chaos Blade</div>
                        <div className="div14">Quelaag</div>
                        <div className="div15">Katana</div>
                        <div className="div16">G.Sword of Artorias (Cursed)</div>
                        <div className="div17">Sif</div>
                        <div className="div18">Dagger</div>
                        <div className="div19">G.Sword of Artorias</div>
                        <div className="div20">Sif</div>
                        <div className="div21">Broken S.Sword</div>
                        <div className="div22">G.Shield of Artorias</div>
                        <div className="div23">Sif</div>
                        <div className="div24">Shield</div>
                        <div className="div25">Golem Axe</div>
                        <div className="div26">Iron Golem</div>
                        <div className="div27">Axe</div>
                        <div className="div28">Dragon Bone Fist</div>
                        <div className="div29">Iron Golem</div>
                        <div className="div30">Fist</div>
                        <div className="div31">Lifehunt Scythe</div>
                        <div className="div32">Priscilla</div>
                        <div className="div33">Halberd/Whip</div>
                        <div className="div34">Dragonslayer Spear</div>
                        <div className="div35">Ornstein</div>
                        <div className="div36">Spear/Thrusting Sword</div>
                        <div className="div37">Smough's Hammer</div>
                        <div className="div38">Smough</div>
                        <div className="div39">G./Hammer</div>
                        <div className="div40">Darkmoon Bow</div>
                        <div className="div41">Gwyndolin</div>
                        <div className="div42">Bow</div>
                        <div className="div43">The Darkmoon Catalyst</div>
                        <div className="div44">Gwyndolin</div>
                        <div className="div45">Catalyst</div>
                        <div className="div46">Great Lord Greatsword</div>
                        <div className="div47">Gwyn</div>
                        <div className="div48">Dagger/G.Sword/S.Sword</div>
                    </div>
                    <div className="tail">
                        <div className="div49">Tail Cutoffs</div>
                        <div className="div50">Drops:</div>
                        <div className="div51">Tip:</div>
                        <div className="div52">Hellkite Dragon</div>
                        <div className="div53">Drake Sword</div>
                        <div className="div54">This boss is very easy to get behind when it does its ground charge move. The incision is a few hands from the tail base</div>
                        <div className="div55">Priscilla</div>
                        <div className="div56">Priscilla's Dagger</div>
                        <div className="div57">Priscilla will not attack you until you attack first, giving you the first strike. Use this to cut off her tail right away</div>
                        <div className="div58">Seath</div>
                        <div className="div59">Moonlight G.Sword</div>
                        <div className="div60">Only his middle/back tail can be cut for the weapon. The incision is close to the tip. If you are failing, homeward bone out of the fight</div>
                        <div className="div61">Stone Dragon (Covenant)</div>
                        <div className="div62">Dragon G.Sword</div>
                        <div className="div63">For whatever reason, this dragon doesn't really care if you cut off its tail. Slice away!</div>
                        <div className="div64">Any Gargoyle </div>
                        <div className="div65">Gargoyle Tail Axe</div>
                        <div className="div66">Continue to circle the gargoyle until you can reach its tail. In case you fail in the roof fight, the Anor Londo gargoyles also drop the weapon</div>
                        <div className="div67">Gaping Dragon</div>
                        <div className="div68">Dragon King G.Axe</div>
                        <div className="div69">This boss is very easy to get behind when it does its ground charge move. The incision is a few hands from the tail base</div>
                    </div>
                    <div className="covenant">
                        <div className="div70">Covenant Weapons</div>
                        <div className="div71">Tip:</div>
                        <div className="div72">Gravelord Sword</div>
                        <div className="div73">Join the Gravelord Servant covenant by waiting in the coffin in front of the titanite demon in the catacombs. Bring an eye of death (can be found behind said demon)</div>
                        <div className="div74">Dark Hand</div>
                        <div className="div75">Join the Darkwraith covenant by retrieving the Lordvessel and killing the Four Kings without talking to Frampt; in the abyss, talk to Kaathe. It is also a rare drop from darkwraiths</div>
                    </div>
                    <div className="drops">
                        <div className="div76">Enemy Drops</div>
                        <div className="div77">Tip:</div>
                        <div className="div78">B.Knight Sword</div>
                        <div className="div79">The black knights in the Kiln of the First Flame respawn</div>
                        <div className="div80">B.Knight G.Sword</div>
                        <div className="div81"> </div>
                        <div className="div82">B.Knight G.Axe</div>
                        <div className="div83"> </div>
                        <div className="div84">B.Knight Halberd</div>
                        <div className="div85"> </div>
                        <div className="div86">B.Knight Shield</div>
                        <div className="div87"> </div>
                        <div className="div88">Channeler's Trident</div>
                        <div className="div89">Channelers in The Duke's Archives respawn</div>
                        <div className="div90">Giant's Halberd</div>
                        <div className="div91">Dropped by Sentinels in daylight Anor Londo or sold by the Giant Blacksmith</div>
                        <div className="div92">S.Knight S.Sword</div>
                        <div className="div93">Dropped by the silver knights in Anor Londo</div>
                        <div className="div94">S.Knight Spear</div>
                        <div className="div95"> </div>
                        <div className="div96">S.Knight Shield</div>
                        <div className="div97"> </div>
                        <div className="div98">Stone G.Sword</div>
                        <div className="div99">Dropped by the Giant Stone Knights in Darkroot Garden. Can be bought from Shiva</div>
                        <div className="div100">Stone G.Shield</div>
                        <div className="div101">Cannot be bought from Shiva</div>
                        <div className="div102">Crescent Axe</div>
                        <div className="div103">Dropped by or sold by Patches</div>
                        <div className="div104">Crest Shield</div>
                        <div className="div105">Dropped by Oscar on the return to Undead Asylum</div>
                        <div className="div106">Demon's Catalyst</div>
                        <div className="div107">Dropped by the Demon Firesage in the Demon Ruins</div>
                        <div className="div108">Izalith Catalyst</div>
                        <div className="div109">Dropped by the Daughter of Chaos in Lost Izalith</div>
                        <div className="div110">Grant</div>
                        <div className="div111">Dropped by Black Phantom Paladin Leeroy in Tomb of the Giants</div>
                        <div className="div112">Sanctus</div>
                        <div className="div113">Dropped by Leeroy</div>
                    </div>
                    <div className="drop">
                        <div className="div114">Loot</div>
                        <div className="div115">Tip:</div>
                        <div className="div116">Astora's S.Sword</div>
                        <div className="div117">On a corpse near the Undead Dragon in the Valley of Drakes (you will aggro it)</div>
                        <div className="div118">Dragon Crest Shield</div>
                        <div className="div119">On a corpse near the Undead Dragon</div>
                        <div className="div120">Havel's G.Shield</div>
                        <div className="div121">Found in Havel's room, behind an illusory wall in a fireplace in Anor Londo</div>
                        <div className="div122">Dragon Tooth</div>
                        <div className="div123">Found in Havel's room</div>
                        <div className="div124">Dragonslayer G.Bow</div>
                        <div className="div125">On a corpse in Anor Londo found by traversing the broken glass window before the O&S fogwall</div>
                        <div className="div126">Velka's Rapier</div>
                        <div className="div127">On a corpse in Ariamis. The Annex Key is needed</div>
                        <div className="div128">Bloodshield</div>
                        <div className="div129">On a corpse near the Undead Dragon in Ariamis</div>
                        <div className="div130">Black Iron G.Shield</div>
                        <div className="div131">On a corpse next to the painting of Ariamis in Anor Londo</div>
                        <div className="div132">Effigy Shield</div>
                        <div className="div133">On a corpse in the Tomb of the Giants</div>
                    </div>
                </Knight>
            </div>
        </div>
     );
}


export default Darksouls;