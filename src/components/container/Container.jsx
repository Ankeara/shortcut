import './container.css'; 
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';
import Moon from '../../assets/images/moon.png';
import Light from '../../assets/images/brightness.png';
import Alt1 from '../../assets/images/alt.png'
import Alt2 from '../../assets/images/alt (1).png'
import Arrow1 from '../../assets/images/arrows.png'
import Arrow2 from '../../assets/images/arrows (1).png'
import Ctrl1 from '../../assets/images/ctrl.png'
import Ctrl2 from '../../assets/images/ctrl (1).png'
import Dot1 from '../../assets/images/dot.png'
import Dot2 from '../../assets/images/dot (1).png'
import Shift1 from '../../assets/images/shift.png'
import Shift2 from '../../assets/images/shift (1).png'
import Window1 from '../../assets/images/computer.png'
import Window2 from '../../assets/images/computer (1).png'
import Enter1 from '../../assets/images/enter.png'
import Enter2 from '../../assets/images/enter (1).png'
import Esc1 from '../../assets/images/esc.png'
import Esc2 from '../../assets/images/esc (1).png'
import KeyF2 from '../../assets/images/f2.png'
import KeyF22 from '../../assets/images/f2 (1).png'
import KeyF4 from '../../assets/images/f4.png'
import KeyF42 from '../../assets/images/f4 (1).png'
import KeyF5 from '../../assets/images/f5.png'
import KeyF52 from '../../assets/images/f5 (1).png'
import KeyF10 from '../../assets/images/f10.png'
import KeyF102 from '../../assets/images/f10 (1).png'
import KeyFn from '../../assets/images/fn.png'
import KeyFn2 from '../../assets/images/fn (1).png'
import Left1 from '../../assets/images/left.png'
import Left2 from '../../assets/images/left (1).png'
import Right1 from '../../assets/images/right.png'
import Right2 from '../../assets/images/right (1).png'
import Up1 from '../../assets/images/up.png'
import Up2 from '../../assets/images/up (1).png'
import Down1 from '../../assets/images/down.png'
import Down2 from '../../assets/images/down(1).png'
import Tab1 from '../../assets/images/tab.png'
import Tab2 from '../../assets/images/tab2.png'
import Leftclick1 from '../../assets/images/left-click.png'
import Leftclick2 from '../../assets/images/left-click (1).png'
import LetterA1 from '../../assets/images/letter-a.png'
import LetterA2 from '../../assets/images/letter-a (1).png'
import LetterB1 from '../../assets/images/letter-b.png'
import LetterB2 from '../../assets/images/letter-b (1).png'
import LetterC1 from '../../assets/images/letter-c.png'
import LetterC2 from '../../assets/images/letter-c (1).png'
import LetterD1 from '../../assets/images/letter-d.png'
import LetterD2 from '../../assets/images/letter-d (1).png'
import LetterE1 from '../../assets/images/letter-e.png'
import LetterE2 from '../../assets/images/letter-e (1).png'
import LetterF1 from '../../assets/images/letter-f.png'
import LetterF2 from '../../assets/images/letter-f (1).png'
import LetterG1 from '../../assets/images/letter-g.png'
import LetterG2 from '../../assets/images/letter-g (1).png'
import LetterH1 from '../../assets/images/letter-h.png'
import LetterH2 from '../../assets/images/letter-h (1).png'
import LetterI1 from '../../assets/images/letter-i.png'
import LetterI2 from '../../assets/images/letter-i (1).png'
import LetterJ1 from '../../assets/images/letter-j.png'
import LetterJ2 from '../../assets/images/letter-j (1).png'
import LetterK1 from '../../assets/images/letter-k.png'
import LetterK2 from '../../assets/images/letter-k (1).png'
import LetterL1 from '../../assets/images/letter-l.png'
import LetterL2 from '../../assets/images/letter-l (1).png'
import LetterM1 from '../../assets/images/letter-m.png'
import LetterM2 from '../../assets/images/letter-m (1).png'
import LetterN1 from '../../assets/images/letter-n.png'
import LetterN2 from '../../assets/images/letter-n (1).png'
import LetterO1 from '../../assets/images/letter-o.png'
import LetterO2 from '../../assets/images/letter-o (1).png'
import LetterP1 from '../../assets/images/letter-p.png'
import LetterP2 from '../../assets/images/letter-p (1).png'
import LetterQ1 from '../../assets/images/letter-q.png'
import LetterQ2 from '../../assets/images/letter-q (1).png'
import LetterR1 from '../../assets/images/letter-r.png'
import LetterR2 from '../../assets/images/letter-r (1).png'
import LetterS1 from '../../assets/images/letter-s.png'
import LetterS2 from '../../assets/images/letter-s (1).png'
import LetterT1 from '../../assets/images/letter-t.png'
import LetterT2 from '../../assets/images/letter-t (1).png'
import LetterU1 from '../../assets/images/letter-u.png'
import LetterU2 from '../../assets/images/letter-u (1).png'
import LetterV1 from '../../assets/images/letter-v.png'
import LetterV2 from '../../assets/images/letter-v (1).png'
import LetterW1 from '../../assets/images/letter-w.png'
import LetterW2 from '../../assets/images/letter-w (1).png'
import LetterX1 from '../../assets/images/letter-x.png'
import LetterX2 from '../../assets/images/letter-x (1).png'
import LetterY1 from '../../assets/images/letter-y.png'
import LetterY2 from '../../assets/images/letter-y (1).png'
import LetterZ1 from '../../assets/images/letter-z.png'
import LetterZ2 from '../../assets/images/letter-z (1).png'
import Mouse1 from '../../assets/images/mouse.png'
import Mouse2 from '../../assets/images/mouse (1).png'
import Mousecursor1 from '../../assets/images/mouse-cursor.png'
import Mousecursor2 from '../../assets/images/mouse-cursor (1).png'
import Minus1 from '../../assets/images/negative.png'
import Minus2 from '../../assets/images/negative (1).png'
import Plus1 from '../../assets/images/plus.png'
import Plus2 from '../../assets/images/plus (1).png'
import Slash1 from '../../assets/images/slash.png'
import Slash2 from '../../assets/images/slash (1).png'
import PlusMinus1 from '../../assets/images/plus-and-minus.png'
import PlusMinus2 from '../../assets/images/plus-and-minus (1).png'
import parenthesis1 from '../../assets/images/parenthesis (4).png'
import parenthesis2 from '../../assets/images/parenthesis (5).png'
import parenthesis3 from '../../assets/images/parenthesis (10).png'
import parenthesis4 from '../../assets/images/parenthesis (11).png'
import parenthesis5 from '../../assets/images/parenthesis (1).png'
import parenthesis6 from '../../assets/images/parenthesis.png'
import parenthesis7 from '../../assets/images/parenthesis (2).png'
import parenthesis8 from '../../assets/images/parenthesis (3).png'
import parenthesis9 from '../../assets/images/parenthesis (6).png'
import parenthesis10 from '../../assets/images/parenthesis (7).png'
import parenthesis11 from '../../assets/images/parenthesis (8).png'
import parenthesis12 from '../../assets/images/parenthesis (9).png'
import Treehold1 from '../../assets/images/touch-and-hold.png'
import Treehold2 from '../../assets/images/touch-and-hold (1).png'
import Twohold1 from '../../assets/images/twotouch.png'
import Twohold2 from '../../assets/images/twotouch (1).png'
import Unfold1 from '../../assets/images/unfold.png'
import Unfold2 from '../../assets/images/unfold (1).png'

import { Link } from 'react-router-dom';
import ShortcutLight from '../../assets/images/quick-shortcut (1).png';

const Container = () => {
const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };
  return (
    <>
      <div className={`container-fluid ${darkMode ? 'dark-mode' : ''}`}>
        <nav>
        <div className="menu">
          <div className="logo">
            <Link>
              <img src={ShortcutLight} alt="Logo" width="40px" />
            </Link>
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Features</a></li>
          <li><Link><a href="#">Github</a></Link></li>
        </ul>
        <div className="dark-mode-toggle"><span>{darkMode ? "Light mode" : "Dark mode"}</span><img src={darkMode ? Light : Moon} 
                alt="Toggle Dark Mode" 
                onClick={toggleDarkMode} 
                className="theme-icon"  /></div>
        </div>
      </nav>
        <div className="container">
          <h1>Quick Shortcut In Desktop With Web Browser</h1>
          <p>Easy Tips To Use And Save Your Time With Shortcut</p>
          <a href="#" id='view' className="button" role="button">Get Started</a>
        </div>

        <div className="section">
          <h2>Why You Should Use Shortcuts</h2>
          <p>
            Shortcuts are easy to use and save you time. Using shortcuts is faster than using a mouse or keyboard one by one.
          </p>
        </div>

        <div className="button-group">
          <button className="btn active">All</button>
          <button className="btn">General</button>
          <button className="btn">Desktop</button>
          <button className="btn">Web Browser</button>
          <button className="btn">VS Code</button>
          <button className="btn">Youtube</button>
        </div>

        <h3>Windows Shortcuts:</h3>
       <div className="shortcut-grid ">
            <div className="shortcut-card">
            <div className="shortcut-keys">
              <div className="key">
                <img src={darkMode ? Ctrl2 : Ctrl1} alt="Ctrl" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? LetterC2 : LetterC1} alt="C" />
              </div>
            </div>
            <p>Copy text or file...</p>
          </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterX1} alt="" /></div>
                </div>
                <p>Cut text or file...</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterV1} alt="" /></div>
                </div>
                <p>Paste text or file...</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterA1} alt="" /></div>
                </div>
                <p>Select all text or file...</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterZ1} alt="" /></div>
                </div>
                <p>Undo</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterY1} alt="" /></div>
                </div>
                <p>Redo</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterS1} alt="" /></div>
                </div>
                <p>Save file</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={Shift1} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterS1} alt="" /></div>
                </div>
                <p>Save as </p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterP1} alt="" /></div>
                </div>
                <p>Print</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterF1} alt="" /></div>
                </div>
                <p>Find</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterN1} alt="" /></div>
                </div>
                <p>Open a new window/tab</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={Shift1} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterN1} alt="" /></div>
                </div>
                <p>Open a new private window</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterD1} alt="" /></div>
                </div>
                <p>DELETE the selected item and move 
it to the Recycle Bin</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={Shift1} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterD1} alt="" /></div>
                </div>
                <p>Delete the selected item without 
moving it to the Recycle Bin first</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={LetterR1} alt="" /></div>
                </div>
                <p>Refresh the active window</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={PlusMinus1} alt="" /></div>
                </div>
                <p>Zoom in or out of a large NUMBER 
of items, like apps pinned to the 
Start screen</p>
            </div>   

            <div className="shortcut-card">
            <div className="shortcut-keys">
              <div className="key">
                <img src={darkMode ? Ctrl2 : Ctrl1} alt="Ctrl" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Mousecursor2 : Mousecursor1} alt="C" />
              </div>
            </div>
            <p>Change the size of desktop icons or 
zoom in or out of a large NUMBER of 
items, like apps pinned to the Start 
screen</p>
          </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Left2 : Left1} alt="" /></div>
                </div>
                <p>Move the cursor to the beginning of 
the previous word</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Right2 : Right1} alt="" /></div>
                </div>
                <p>Move the cursor to the beginning of 
the next word</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Up2 : Up1} alt="" /></div>
                </div>
                <p>Move the cursor to the beginning of 
the previous paragraph</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Down2 : Down1} alt="" /></div>
                </div>
                <p>Move the cursor to the beginning of 
the next paragraph</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Shift2 : Shift1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? KeyF102 : KeyF10} alt="" /></div>
                </div>
                <p>Display the shortcut menu for the 
selected item</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Shift2 : Shift1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Arrow2 : Arrow1}  alt="" /></div>
                </div>
                <p>Select more than one item in a 
window or on the desktop, or select 
text within a document</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Esc2 : Esc1}  alt="" /></div>
                </div>
                <p>Stop or leave the current task</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Shift2 : Shift1} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Esc2 :  Esc1} alt="" /></div>
                </div>
                <p>Open Task Manager </p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Alt2 : Alt1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? KeyF42 : KeyF4} alt="" /></div>
                </div>
                <p>Close the active window</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Alt2 : Alt1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Tab2 :Tab1} alt="" /></div>
                </div>
                <p>Switch between open apps 
(Windows feature, works on all 
browsers)</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                </div>
                <p>Display or hide the Start screen</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterB2 : LetterB1} alt="" /></div>
                </div>
                <p>Set focus in the notification area</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterD2 :LetterD2} alt="" /></div>
                </div>
                <p>Show desktop</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterE2 : LetterE1} alt="" /></div>
                </div>
                <p>Open File Explorer
</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterF2 :LetterF1} alt="" /></div>
                </div>
                <p>Open the Search charm and search 
for files</p>
            </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterH2 :LetterH1} alt="" /></div>
                </div>
                <p>Open Mute</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterI2 : LetterI1} alt="" /></div>
                </div>
                <p>Open the Settings charm</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterL2 :LetterL1} alt="" /></div>
                </div>
                <p>Lock your computer</p>
            </div> 

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterM2 : LetterM1} alt="" /></div>
                </div>
                <p>Minimize all windows</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterP2 :LetterP2} alt="" /></div>
                </div>
                <p>Choose a presentation display mode</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterQ2 : LetterQ1} alt="" /></div>
                </div>
                <p>Open the Search charm to search 
everywhere or within the open app 
(if the app supports app search)
</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterR2 :LetterR1} alt="" /></div>
                </div>
                <p>Open the Run dialog</p>
            </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterT2 :LetterT1} alt="" /></div>
                </div>
                <p>Cycle through apps on the taskbar</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterU2 : LetterU1} alt="" /></div>
                </div>
                <p>Open Ease of Access Center</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterV2 :LetterV1} alt="" /></div>
                </div>
                <p>Show history you copyed</p>
            </div>     

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterX2 : LetterX1} alt="" /></div>
                </div>
                <p>Open the Quick Link menu</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Up2 :Up2} alt="" /></div>
                </div>
                <p>Maximize the window</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Down2 : Down1} alt="" /></div>
                </div>
                <p>Remove current app from screen or 
minimize the desktop window
</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Left2 :Left1} alt="" /></div>
                </div>
                <p>Maximize the app or desktop window 
to the LEFT side of the screen</p>
            </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Right2 :Right1} alt="" /></div>
                </div>
                <p>Maximize the app or desktop window 
to the RIGHT side of the screen</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? PlusMinus2 : PlusMinus1} alt="" /></div>
                </div>
                <p>Zoom in or out using Magnifier</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Esc2 :Esc1} alt="" /></div>
                </div>
                <p>Exit Magnifier</p>
            </div> 

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterM2 : LetterM1} alt="" /></div>
                </div>
                <p>Minimize all windows</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Dot2 :Dot1} alt="" /></div>
                </div>
                <p>Choose a presentation display mode</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Window2 : Window1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Tab2 : Tab1} alt="" /></div>
                </div>
                <p>Open Task View (switch between 
virtual desktops)   
</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Shift2 : Shift1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Alt2 :Alt1} alt="" /></div>
                </div>
                <p>Switch language to use</p>
            </div>
        </div>

        <h3>File Explorer shortcuts:</h3>
<div className="shortcut-grid ">
            <div className="shortcut-card">
            <div className="shortcut-keys">
              <div className="key">
                <img src={darkMode ? Alt2 : Alt1} alt="Ctrl" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? LetterD2 : LetterD1} alt="C" />
              </div>
            </div>
            <p>Select the address bar</p>
          </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterN2 : LetterN1} alt="" /></div>
                </div>
                <p>Open a new window</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Shift2 : Shift1} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterW2 : LetterW1} alt="" /></div>
                </div>
                <p>Close the current window</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Shift2 : Shift1} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterN2 : LetterN1} alt="" /></div>
                </div>
                <p>Create a new folder</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode? LetterP2 : LetterP1} alt="" /></div>
                </div>
                <p>Display the preview pane</p>
            </div>   

            <div className="shortcut-card">
            <div className="shortcut-keys">
              <div className="key">
                <img src={darkMode ? Alt2 : Alt1} alt="C" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Enter2 : Enter1} alt="Ctrl" />
              </div>
            </div>
            <p>Open the Properties dialog box for 
the selected item</p>
          </div>
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? KeyF22 : KeyF2}  alt="" /></div>
                </div>
                <p>Rename</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? KeyF52 : KeyF5}  alt="" /></div>
                </div>
                <p>Refresh</p>
            </div>
        </div>

        <h3>Web Browser Shortcuts:</h3>

       <div className="shortcut-grid ">
            <div className="shortcut-card">
            <div className="shortcut-keys">
              <div className="key">
                <img src={darkMode ? Ctrl2 : Ctrl1} alt="Ctrl" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? LetterN2 : LetterN1} alt="C" />
              </div>
            </div>
            <p>Open a new window</p>
          </div>


            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Shift2 : Shift1} alt="C" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? LetterN2 : LetterN1} alt="C" />
              </div>
                </div>
                <p>Open a new private window</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterW2 : LetterW1} alt="" /></div>
                </div>
                <p>Close the current window</p>
            </div>

<div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Shift2 : Shift1} alt="C" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? LetterW2 : LetterW1} alt="C" />
              </div>
                </div>
                <p>Close the current window</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterT2 : LetterT1} alt="" /></div>
                </div>
                <p>Open a new tab</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Tab2 : Tab1} alt="" /></div>
                </div>
                <p>Switch to the previous tab
</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Shift2 : Shift1} alt="C" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? LetterT2 : LetterT1} alt="C" />
              </div>
                </div>
                <p>Reopen the last closed tab</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Shift2 : Shift1} alt="C" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Tab2 : Tab1} alt="C" />
              </div>
                </div>
                <p>Switch to the previous tab
</p>
            </div>

            

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                </div>
                <p>Switch to a specific tab (numbered 1–8)</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Alt2 : Alt1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Tab2 : Tab1} alt="" /></div>
                </div>
                <p>Switch to the next tab</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Alt2 : Alt1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Left2 : Left1} alt="" /></div>
                </div>
                <p>Go forward</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Alt2 : Alt1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? Right2 : Right1} alt="" /></div>
                </div>
                <p>Back forward</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? KeyF52 : KeyF5} alt="" /></div>
                </div>
                <p>Reload without cache (force refresh)</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Esc2 : Esc1}  alt="" /></div>
                </div>
                <p>Stop loading the page</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterD2 : LetterD1} alt="" /></div>
                </div>
                <p>Bookmark the current page</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl2} alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterH2 : LetterH1} alt="" /></div>
                </div>
                <p>Open the browsing history</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterR2 : LetterR1} alt="" /></div>
                </div>
                <p>Refresh the active window</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? PlusMinus2 :PlusMinus1} alt="" /></div>
                </div>
                <p>Zoom in or out of a large NUMBER 
of items, like apps pinned to the 
Start screen</p>
            </div>   

            <div className="shortcut-card">
            <div className="shortcut-keys">
              <div className="key">
                <img src={darkMode ? Ctrl2 : Ctrl1} alt="Ctrl" />
              </div>
              <div className="plus">+</div>
              <div className="key">
                <img src={darkMode ? Mousecursor2 : Mousecursor1} alt="C" />
              </div>
            </div>
            <p>Change the size of desktop icons or 
zoom in or out of a large NUMBER of 
items, like apps pinned to the Start 
screen</p>
          </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterJ2 : LetterJ1} alt="" /></div>
                </div>
                <p>Open the downloads manager</p>
            </div>
            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterB2 : LetterB1} alt="" /></div>
                </div>
                <p>Open the downloads manager</p>
            </div>

            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterL2 :LetterL2} alt="" /></div>
                </div>
                <p>Focus the address bar</p>
            </div>

            
            <div className="shortcut-card">
                <div className="shortcut-keys">
                    <div className="key"><img src={darkMode ? Ctrl2 : Ctrl1}  alt="" /></div>
                    <div className="plus">+</div>
                    <div className="key"><img src={darkMode ? LetterF2 : LetterF1} alt="" /></div>
                </div>
                <p>Open the downloads manager
Focus the address bar
</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Container;
