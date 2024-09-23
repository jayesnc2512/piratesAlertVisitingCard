import React, { useState, useEffect } from 'react';
import phone from '../assets/images/phone1.png';
import product from '../assets/images/product.png';
import { motion } from 'framer-motion';
import './PhoneView.css';
import counterfeit from '../assets/images/counterfeit.png'
import Blinker1 from './Blinker1';
import Blinker2 from './Blinker2';
import Blinker3 from './Blinker3';


const PhoneView = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showLine, setShowLine] = useState(false);
    const [startStamp, setStartStamp] = useState(false);
    const [showBlinker1, setShowBlinker1] = useState(false);
    const [showBlinker2, setShowBlinker2] = useState(false);
    const [showBlinker3, setShowBlinker3] = useState(false);


    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true); // Show the text after 300ms
        }, 2000);

        const lineTimer = setTimeout(() => {
            setShowLine(true); // Show the horizontal line after 3 seconds
        }, 3000);

        const startAnimationTimer = setTimeout(() => {
            setShowLine(false);
            setStartStamp(true)
            setStartAnimation(true); // Trigger animations
        }, 4900);
        const startBlinker1Timer = setTimeout(() => {
            setShowBlinker1(true)// Trigger animations
        }, 8000);

        // const startStampTimer = setTimeout(() => {
        //     setStartStamp(false);
        // }, 8000);

        return () => {
            clearTimeout(textTimer); // Cleanup text timer
            clearTimeout(lineTimer); // Cleanup line timer
            clearTimeout(startAnimationTimer); // Cleanup animation timer
            clearTimeout(startBlinker1Timer);
            // clearTimeout(startStampTimer);
        };
    }, []);

    return (
        <motion.div
            className='phone-view'
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <div className='container-lg phone-container'>
                {showBlinker1 && <Blinker1 showBlinker2={showBlinker2} setShowBlinker2={setShowBlinker2} />}
                {showBlinker2 && <Blinker2 showBlinker3={showBlinker3} setShowBlinker3={setShowBlinker3} />}
                {showBlinker3 && <Blinker3  />}

                
                <img
                    src={phone}
                    alt="Phone"
                    className={`phone-image ${startAnimation ? 'slide-out' : ''}`}
                />
                {/* <MdOutlineRadioButtonChecked /> */}
                

                <img
                    src={product}
                    alt="Product"
                    className={`product-image ${startAnimation ? 'zoom-in' : ''}`}
                />
                {startStamp && (
                    <img src={counterfeit} className="counterfeit-stamp" alt="Counterfeit"></img>
                )}

                {showLine && (
                    <div className="horizontal-line" style={{ top: '15%', height: '40%' }}></div>
                )}
            </div>
            {showText && (
                <div className={`bottom-text ${startAnimation ? 'text-hide' : ''}`}>
                    <span className="big-text text-center">SCAN</span>
                </div>
            )}
        </motion.div>
    );
};

export default PhoneView;
