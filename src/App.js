import { useRef, useState } from "react";

function App() {
  const curtains = useRef();
  const curtainRod = useRef();

  const openCurtains = () => {
    curtains.current.playbackRate = 2.5;
    curtains.current.play();
  }

  const [curtainHeight, setCurtainHeight] = useState('');

  return (
    <>
    {/* <div id="black-frost">
      <video id="curtains-vid" autoplay="autoplay" loop="true" muted defaultmuted>
        <source id="red-curtains" src="/red-curtains-sc.mp4" type="video/mp4"></source>
      </video>
autoplay="autoplay" loop="true"

    </div> */}
    <div id="main-outer">
      <div onClick={openCurtains} className="opener">
        <button onClick={openCurtains} className="opener">PLAY</button>
      </div>
      <div id="main-content">
        <div id="transforming-name" style={{opacity: "1"}}>
          <div className="emerging" id="rising-name"><div id="name-from-above">BRIAN</div></div>
          <div className="emerging" id="falling-name"><div id="name-from-below">KIESEL</div></div>
        </div>
          <div id="black-frost" ref={curtainRod}>
            <div className="curtain-cont">
              <video id="curtains-vid" muted defaultmuted ref={curtains}>
                <source id="red-curtains" src="/rc-to-mp4.m4v" type="video/mp4"></source>
              </video>
            </div>
          </div>
        <div id="headshot-container">
            <img id="headshot" src="/Brian_Kiesel_Headshots_01.jpg" style={{ opacity: "1", zIndex: "10" }}></img>
        </div>
        {/* <div id="language-button"> */}
          {/* <div id="concave-left">
            <div className="concavity cl"></div>
          </div>
          <div className="rising-languages">English</div>
          <div id="nihongo" className="rising-languages">日本語</div>
          <div id="concave-right">
            <div id="short-right-side"></div>
            <div className="concavity cr"></div>
          </div> */}
          <div id="language-tab">
            <div id="english" className="rising-languages">English</div>
            <div id="nihongo" className="rising-languages">日本語</div>
            <div id="curve-out-left" className="language-hover"></div>
            <div id="curve-left" className="language-hover"></div>
            <div id="bottom-border-test" className="language-hover"></div>
            <div id="curve-right" className="language-hover"></div>
            <div id="curve-out-right" className="language-hover"></div>
            <div id="remove-center"></div>
            {/* <div id="remove-curve-in-top-inside"><div id="touchup-inside-top"></div></div> */}
            <div id="remove-curve-in-top-outside"><div id="touchup-outside-top"></div></div>
            {/* <div id="remove-curve-in-bottom-inside"><div id="touchup-inside-bottom"></div></div> */}
            <div id="remove-curve-in-bottom-outside"><div id="touchup-outside-bottom"></div></div>
          </div>
          <div id="language-slide-together">
            <div id="language-tab-reveal">
              <div id="languages" className="rising-languages">LANGUAGES</div>
              <div id="curve-out-left" className="language-hover"></div>
              <div id="curve-left" className="language-hover"></div>
              <div id="bottom-border-test" className="language-hover"></div>
              <div id="curve-right" className="language-hover"></div>
              <div id="curve-out-right" className="language-hover"></div>
              <div id="remove-center"></div>
              <div id="remove-curve-in-top-outside"><div id="touchup-outside-top"></div></div>
              <div id="remove-curve-in-bottom-outside"><div id="touchup-outside-bottom"></div></div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
    </>
  );
}

export default App;
