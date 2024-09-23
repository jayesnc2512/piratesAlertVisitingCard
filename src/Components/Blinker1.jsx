import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import './Blinker1.css';
import SellerInfo from "./SellerInfo";
import { time } from 'framer-motion/client';

const Blinker1 = (props) => {
    const { showBlinker2, setShowBlinker2 } = props;
    const [showSeller, setShowSeller] = useState(false);
    const sellerRef = useRef(null); // Reference for SellerInfo component
    const [unlock, setUnlock] = useState(false);
    const [showErrorSeller, setShowErrorSeller] = useState(false);
    const [startText, setStartText] = useState([false, false, false, false, false, false, false]);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);
    const [mouseStartY, setMouseStartY] = useState(0);
    const [mouseEndY, setMouseEndY] = useState(0);
    const [startGreenText, setStartGreenText] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [successSeller, setSuccessSeller] = useState(false);

    // Close SellerInfo if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sellerRef.current && !sellerRef.current.contains(event.target)) {
                setShowSeller(false);
            }
        };

        if (showSeller) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        // const timer = setTimeout(() => {
        //     setSuccessSeller(true);
        // }, 15000);

        // Cleanup listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            // clearTimeout(timer);
        };
    }, [showSeller]);

    return (
        <div className="blinker1" onClick={() => {
            setShowSeller(true);
            setShowBlinker2(true);
        }}>
            {!showSeller && (
                <div className='blink-icon'>
                    <MdOutlineRadioButtonChecked />
                </div>
            )}
            {showSeller && (
                <div ref={sellerRef}>
                    <SellerInfo
                        unlock={unlock} setUnlock={setUnlock} showErrorSeller={showErrorSeller} setShowErrorSeller={setShowErrorSeller} startText={startText} setStartText={setStartText} touchStartY={touchStartY} setTouchStartY={setTouchStartY} touchEndY={touchEndY} setTouchEndY={setTouchEndY} mouseStartY={mouseStartY} setMouseStartY={setMouseStartY} mouseEndY={mouseEndY} setMouseEndY={setMouseEndY} startGreenText={startGreenText} setStartGreenText={setStartGreenText} successSeller={successSeller} setSuccessSeller={setSuccessSeller}
                    />
                </div>
            )}
        </div>
    );
}

export default Blinker1;
