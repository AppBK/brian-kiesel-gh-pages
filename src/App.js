function App() {
  return (
    <>
    <div id="main-outer">
      <div id="main-content">
        <div id="transforming-name">
          <div className="emerging" id="rising-name"><div id="name-from-above">BRIAN</div></div>
          <div className="emerging" id="falling-name"><div id="name-from-below">KIESEL</div></div>
        </div>
        <div id="headshot-container">
          <img id ="headshot" src="/Brian_Kiesel_Headshots_01.jpg"></img>
          <div id="circle-it"></div>
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
