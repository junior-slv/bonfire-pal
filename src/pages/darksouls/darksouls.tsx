import './darksouls.css';
// import circleup from '../../assets/circle-up.png'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
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
var swep = 0;


const Darksouls = () => {
    const [selected1, setSelected1] = useState(localStorage.getItem('toggle-switch-1') === 'true');
    const [selected2, setSelected2] = useState(localStorage.getItem('toggle-switch-2') === 'true');
    const [selected3, setSelected3] = useState(localStorage.getItem('toggle-switch-3') === 'true');
    const [selected4, setSelected4] = useState(localStorage.getItem('toggle-switch-4') === 'true');
    const [selected5, setSelected5] = useState(localStorage.getItem('toggle-switch-5') === 'true');
    const [selected6, setSelected6] = useState(localStorage.getItem('toggle-switch-6') === 'true');
    const [selected7, setSelected7] = useState(localStorage.getItem('toggle-switch-7') === 'true');
    const [selected8, setSelected8] = useState(localStorage.getItem('toggle-switch-8') === 'true');
    const [selected9, setSelected9] = useState(localStorage.getItem('toggle-switch-9') === 'true');
    const [selected10, setSelected10] = useState(localStorage.getItem('toggle-switch-10') === 'true');
    const [selected11, setSelected11] = useState(localStorage.getItem('toggle-switch-11') === 'true');
    const [selected12, setSelected12] = useState(localStorage.getItem('toggle-switch-12') === 'true');
    const [selected13, setSelected13] = useState(localStorage.getItem('toggle-switch-13') === 'true');
    const [selected14, setSelected14] = useState(localStorage.getItem('toggle-switch-14') === 'true');
    const [selected15, setSelected15] = useState(localStorage.getItem('toggle-switch-15') === 'true');
    const [selected16, setSelected16] = useState(localStorage.getItem('toggle-switch-16') === 'true');
    const [selected17, setSelected17] = useState(localStorage.getItem('toggle-switch-17') === 'true');
    const [selected18, setSelected18] = useState(localStorage.getItem('toggle-switch-18') === 'true');
    const [selected19, setSelected19] = useState(localStorage.getItem('toggle-switch-19') === 'true');
    const [selected20, setSelected20] = useState(localStorage.getItem('toggle-switch-20') === 'true');
    const [selected21, setSelected21] = useState(localStorage.getItem('toggle-switch-21') === 'true');
    const [selected22, setSelected22] = useState(localStorage.getItem('toggle-switch-22') === 'true');
    const [selected23, setSelected23] = useState(localStorage.getItem('toggle-switch-23') === 'true');
    const [selected24, setSelected24] = useState(localStorage.getItem('toggle-switch-24') === 'true');
    const [selected25, setSelected25] = useState(localStorage.getItem('toggle-switch-25') === 'true');
    const [selected26, setSelected26] = useState(localStorage.getItem('toggle-switch-26') === 'true');
    const [selected27, setSelected27] = useState(localStorage.getItem('toggle-switch-27') === 'true');
    const [selected28, setSelected28] = useState(localStorage.getItem('toggle-switch-28') === 'true');
    const [selected29, setSelected29] = useState(localStorage.getItem('toggle-switch-29') === 'true');
    const [selected30, setSelected30] = useState(localStorage.getItem('toggle-switch-30') === 'true');
    const [selected31, setSelected31] = useState(localStorage.getItem('toggle-switch-31') === 'true');
    const [selected32, setSelected32] = useState(localStorage.getItem('toggle-switch-32') === 'true');
    const [selected33, setSelected33] = useState(localStorage.getItem('toggle-switch-33') === 'true');
    const [selected34, setSelected34] = useState(localStorage.getItem('toggle-switch-34') === 'true');
    const [selected35, setSelected35] = useState(localStorage.getItem('toggle-switch-35') === 'true');
    const [selected36, setSelected36] = useState(localStorage.getItem('toggle-switch-36') === 'true');
    const [selected37, setSelected37] = useState(localStorage.getItem('toggle-switch-37') === 'true');
    const [selected38, setSelected38] = useState(localStorage.getItem('toggle-switch-38') === 'true');
    const [selected39, setSelected39] = useState(localStorage.getItem('toggle-switch-39') === 'true');
    const [selected40, setSelected40] = useState(localStorage.getItem('toggle-switch-40') === 'true');
    const [selected41, setSelected41] = useState(localStorage.getItem('toggle-switch-41') === 'true');
    const [selected42, setSelected42] = useState(localStorage.getItem('toggle-switch-42') === 'true');
    const [selected43, setSelected43] = useState(localStorage.getItem('toggle-switch-43') === 'true');

      
    const [checked, setChecked] = useState(true);

    useEffect(() => {

    }, [])
    
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
                <h2>Knihght's honor </h2> 
                <input type="checkbox" name="" id="chek" />
                <form className="kni" >
                    <div className="souls-weapons">
                        <div className="div1">Soul Weapons: {swep.toFixed(0)}%</div>
                        <div className="div2">Soul Used:</div>
                        <div className="div3">You also need a +10 ...:</div>
                        <div className="div4"
                            style={{ background: selected1 ? 'green' : 'none' }}
                            
                            > <ToggleSwitch checked={selected1} id='toggle-switch-1'
                            onChange={
                            (e) => {
                                        localStorage.setItem('toggle-switch-1',`${e.target.checked}`);
                                        setSelected1(e.target.checked);
                                        console.log(e.target.checked)
                                        swep = selected1 ? swep-6.67 : swep+6.67;

                                    }
                                    } /> M.L. Butterfly Horn</div>
                        <div id='div5' className="div5"
                            style={{ background: selected1 ? 'green' : 'none' }}
                                        >Moonlight Butterfly</div>
                        <div className="div6"
                            style={{ background: selected1 ? 'green' : 'none' }}
                                        >Spear/Thrusting Sword</div>
                        <div className="div7"
                            style={{ background: selected2 ? 'green' : 'none' }}
                            ><ToggleSwitch checked={selected2} id='toggle-switch-2'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-2',`${e.target.checked}`);
                                    setSelected2(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected2 ? swep-6.67 : swep+6.67;
                                }
                                
                                } />Crystal Ring Shield</div>
                        <div className="div8"
                            style={{ background: selected2 ? 'green' : 'none' }}                        
                                    >Moonlight Butterfly</div>
                        <div className="div9"
                            style={{ background: selected2 ? 'green' : 'none' }}                        
                                    >Shield</div>
                        <div className="div10"
                            style={{ background: selected3 ? 'green' : 'none' }}                        
                            ><ToggleSwitch checked={selected3} id='toggle-switch-3'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-3',`${e.target.checked}`);
                                    setSelected3(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected3 ? swep-6.67 : swep+6.67;
                                }
                                } />Quelaag's Furysword</div>
                        <div className="div11"
                            style={{ background: selected3 ? 'green' : 'none' }}                            
                                    >Quelaag</div>
                        <div className="div12"
                            style={{ background: selected3 ? 'green' : 'none' }}                            
                                    >Curved Sword</div>
                        <div className="div13"
                            style={{ background: selected4 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected4} id='toggle-switch-4'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-4',`${e.target.checked}`);
                                    setSelected4(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected4 ? swep-6.67 : swep+6.67;
                                }
                                } />Chaos Blade</div>
                        <div className="div14"
                            style={{ background: selected4 ? 'green' : 'none' }}                            
                                    >Quelaag</div>
                        <div className="div15"
                            style={{ background: selected4 ? 'green' : 'none' }}                            
                                    >Katana</div>
                        <div className="div16"
                            style={{ background: selected5 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected5} id='toggle-switch-5'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-5',`${e.target.checked}`);
                                    setSelected5(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected5 ? swep-6.67 : swep+6.67;
                                }
                                } />G.Sword of Artorias (Cursed)</div>
                        <div className="div17"
                            style={{ background: selected5 ? 'green' : 'none' }}                            
                                >Sif</div>
                        <div className="div18"
                            style={{ background: selected5 ? 'green' : 'none' }}                            
                                >Dagger</div>
                        <div className="div19"
                            style={{ background: selected6 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected6} id='toggle-switch-6'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-6',`${e.target.checked}`);
                                    setSelected6(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected6 ? swep-6.67 : swep+6.67;
                                }
                                } />G.Sword of Artorias</div>
                        <div className="div20"
                            style={{ background: selected6 ? 'green' : 'none' }}                            
                                >Sif</div>
                        <div className="div21"
                            style={{ background: selected6 ? 'green' : 'none' }}                            
                                >Broken S.Sword</div>
                        <div className="div22"
                            style={{ background: selected7 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected7} id='toggle-switch-7'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-7',`${e.target.checked}`);
                                    setSelected7(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected7 ? swep-6.67 : swep+6.67;
                                }
                                } />G.Shield of Artorias</div>
                        <div className="div23"
                            style={{ background: selected7 ? 'green' : 'none' }}                            
                                >Sif</div>
                        <div className="div24"
                            style={{ background: selected7 ? 'green' : 'none' }}                            
                                >Shield</div>
                        <div className="div25"
                            style={{ background: selected8 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected8} id='toggle-switch-8'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-8',`${e.target.checked}`);
                                    setSelected8(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected8 ? swep-6.67 : swep+6.67;
                                }
                                } />Golem Axe</div>
                        <div className="div26"
                            style={{ background: selected8 ? 'green' : 'none' }}                        
                                >Iron Golem</div>
                        <div className="div27"
                            style={{ background: selected8 ? 'green' : 'none' }}                        
                                >Axe</div>
                        <div className="div28"
                            style={{ background: selected9 ? 'green' : 'none' }}                        
                            ><ToggleSwitch checked={selected9} id='toggle-switch-9'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-9',`${e.target.checked}`);
                                    setSelected9(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected9 ? swep-6.67 : swep+6.67;
                                }
                                } />Dragon Bone Fist</div>
                        <div className="div29"
                            style={{ background: selected9 ? 'green' : 'none' }}                             
                                >Iron Golem</div>
                        <div className="div30"
                            style={{ background: selected9 ? 'green' : 'none' }}                             
                                >Fist</div>
                        <div className="div31"
                            style={{ background: selected10 ? 'green' : 'none' }}                             
                            ><ToggleSwitch checked={selected10} id='toggle-switch-10'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-10',`${e.target.checked}`);
                                    setSelected10(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected10 ? swep-6.67 : swep+6.67;
                                }
                                } />Lifehunt Scythe</div>
                        <div className="div32"
                            style={{ background: selected10 ? 'green' : 'none' }}                          
                                >Priscilla</div>
                        <div className="div33"
                            style={{ background: selected10 ? 'green' : 'none' }}                          
                                >Halberd/Whip</div>
                        <div className="div34"
                            style={{ background: selected11 ? 'green' : 'none' }}                          
                            ><ToggleSwitch checked={selected11} id='toggle-switch-11'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-11',`${e.target.checked}`);
                                    setSelected11(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected11 ? swep-6.67 : swep+6.67;
                                }
                                } />Dragonslayer Spear</div>
                        <div className="div35"
                            style={{ background: selected11 ? 'green' : 'none' }}                            
                                >Ornstein</div>
                        <div className="div36"
                            style={{ background: selected11 ? 'green' : 'none' }}                            
                                >Spear/Thrusting Sword</div>
                        <div className="div37"
                            style={{ background: selected12 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected12} id='toggle-switch-12'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-12',`${e.target.checked}`);
                                    setSelected12(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected12 ? swep-6.67 : swep+6.67;
                                }
                                } />Smough's Hammer</div>
                        <div className="div38"
                            style={{ background: selected12 ? 'green' : 'none' }}                            
                                >Smough</div>
                        <div className="div39"
                            style={{ background: selected12 ? 'green' : 'none' }}                            
                                >G./Hammer</div>
                        <div className="div40"
                            style={{ background: selected13 ? 'green' : 'none' }}                            
                            ><ToggleSwitch checked={selected13} id='toggle-switch-13'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-13',`${e.target.checked}`);
                                    setSelected13(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected13 ? swep-6.67 : swep+6.67;
                                }
                                } />Darkmoon Bow</div>
                        <div className="div41"
                            style={{ background: selected13 ? 'green' : 'none' }}                         
                                >Gwyndolin</div>
                        <div className="div42"
                            style={{ background: selected13 ? 'green' : 'none' }}                         
                                >Bow</div>
                        <div className="div43"
                            style={{ background: selected14 ? 'green' : 'none' }}                         
                            ><ToggleSwitch checked={selected14} id='toggle-switch-14'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-14',`${e.target.checked}`);
                                    setSelected14(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected14 ? swep-6.67 : swep+6.67;
                                }
                                } />The Darkmoon Catalyst</div>
                        <div className="div44"
                            style={{ background: selected14 ? 'green' : 'none' }}                             
                                >Gwyndolin</div>
                        <div className="div45"
                            style={{ background: selected14 ? 'green' : 'none' }}                             
                                >Catalyst</div>
                        <div className="div46"
                            style={{ background: selected15 ? 'green' : 'none' }}                             
                            ><ToggleSwitch checked={selected15} id='toggle-switch-15'
                        onChange={
                        (e) => {
                                    localStorage.setItem('toggle-switch-15',`${e.target.checked}`);
                                    setSelected15(e.target.checked);
                                    console.log(e.target.checked)
                                    swep = selected15 ? swep-6.67 : swep+6.67;
                                }
                                } />Great Lord Greatsword</div>
                        <div className="div47"
                            style={{ background: selected15 ? 'green' : 'none' }}                             
                                >Gwyn</div>
                        <div className="div48"
                            style={{ background: selected15 ? 'green' : 'none' }}                             
                                >Dagger/G.Sword/S.Sword</div>
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
                </form>
            </div>
        </div>

     );
}


export default Darksouls;