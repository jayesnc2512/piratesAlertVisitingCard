import React, { useState, useEffect } from 'react';

import GridLines from 'react-gridlines';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneView from './Components/PhoneView';
import Blinker1 from './Components/Blinker1';
import logo from './assets/images/logo.png';

function App() {
  const [showPiratesAlert, setShowPiratesAlert] = useState(false);
  const [showCentralImage, setShowCentralImage] = useState(false);

  useEffect(() => {
    // Show PiratesAlert after WaveBackground animation completes
    const timer1 = setTimeout(() => {
      setShowPiratesAlert(true);
    }, 2000); // Adjust to match the duration of WaveBackground animation

    // Hide PiratesAlert and show CentralImage after its animation completes
    const timer2 = setTimeout(() => {
      setShowPiratesAlert(false);
    }, 4000); // Adjust to match the duration of PiratesAlert animation

    const timer3 = setTimeout(() => {
      setShowCentralImage(true);
    }, 5000); // Adjust to match the duration of PiratesAlert animation


    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);

    };
  }, []);

  return (
    <div className="container-fluid">
      <img src={logo} className='logo-home' alt="Pirates-Alert" />
      {/* <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={15}> */}

      {/* <WaveBackground />
      <AnimatePresence>
        {showPiratesAlert && <PiratesAlert />}
      </AnimatePresence>
      <AnimatePresence>
        {showCentralImage && (
          <CentralImage />
        )}
      </AnimatePresence> */}
      {/* <div className="container-fluid"> */}
        <PhoneView />
        {/* </div> */}
      {/* </GridLines> */}



    </div>
  );
}

export default App;
