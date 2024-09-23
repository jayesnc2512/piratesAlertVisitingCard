import React, { useState, useEffect } from 'react';
import './pastInfringement.css';
import { BiSearchAlt2 } from "react-icons/bi";
import SellerCard from './SellerCard.js';
import ValidSellerInfo from '../SellerInfo/ValidSellerInfo';
import Typewriter from 'typewriter-effect';
import lock from '../../assets/images/lock.png';
import sellerVideo from '../../assets/T2/T2/3-4.mp4'; // Path to your video file
import sellerVideo2 from '../../assets/T2/T2/5.mp4'; // Path to your video file

const SellerInfo = (props) => {
    const { unlock, setUnlock, showErrorSeller, setShowErrorSeller, showRajkumar, setShowRajkumar,
        moveUp, setMoveUp, touchStartY, setTouchStartY, touchEndY, setTouchEndY, mouseStartY, setMouseStartY, mouseEndY, setMouseEndY, visible, setVisible, startGreenText, setStartGreenText, successSeller, setSuccessSeller } = props;
    


    return (
        <div className="card past-infringement-main">
            {!unlock ?
                <video
                    src={sellerVideo}
                    className="seller-video-past"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                /> :
                <video
                    src={sellerVideo2}
                    className="seller-video-past"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                />

            }

            {!unlock &&
                <div className='button-parent-past' onClick={() => setUnlock(true)}>
                    <div className='button-past'  >click me</div>
                </div>
            }        </div>
    );
};

export default SellerInfo;
