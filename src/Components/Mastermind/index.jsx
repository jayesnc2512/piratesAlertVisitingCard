import React, { useState, useEffect } from 'react';
import './mastermind.css';
// import { BiSearchAlt2 } from "react-icons/bi";
// import SellerCard from './SellerCard.js';
// import ValidSellerInfo from '../SellerInfo/ValidSellerInfo';
// import Typewriter from 'typewriter-effect';
// import lock from '../../assets/images/lock.png';
import sellerVideo from '../../assets/T2/T2/8.mp4'; // Path to your video file
import sellerVideo2 from '../../assets/T2/T2/7.mp4'; // Path to your video file

const SellerInfo = (props) => {
    const { unlock, setUnlock, showErrorSeller, setShowErrorSeller, showRajkumar, setShowRajkumar,
        moveUp, setMoveUp, touchStartY, setTouchStartY, touchEndY, setTouchEndY, mouseStartY, setMouseStartY, mouseEndY, setMouseEndY, visible, setVisible, startGreenText, setStartGreenText, successSeller, setSuccessSeller } = props;



    return (
        <div className="card past-infringement-mastermind">
            {!unlock ?
                <video
                    src={sellerVideo}
                    className=" seller-video-mastermind"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                /> :
                <video
                    src={sellerVideo2}
                    className="seller-video-mastermind"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                />

            }

            {!unlock &&
                <div className='button-parent' onClick={() => setUnlock(true)}>
                    <div className='button'  >click me</div>
                </div>
            }        </div>
    );
};

export default SellerInfo;
