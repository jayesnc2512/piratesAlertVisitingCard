import React, { useState, useEffect } from 'react';
import './sellerInfo.css';
import { BsPersonCircle } from "react-icons/bs";
import lock from "../../assets/images/lock.png"; // Path to lock image
import logo from "../../assets/images/logo.png"; // Path to your logo image
import Typewriter from "typewriter-effect";
import ValidSellerInfo from './ValidSellerInfo';
import sellerVideo from '../../assets/T2/T2/1.mp4'; // Path to your video file
import sellerVideo2 from '../../assets/T2/T2/2.mp4'; // Path to your video file

const SellerInfo = (props) => {
  const { unlock, setUnlock, showErrorSeller, setShowErrorSeller, startText, setStartText, touchStartY, setTouchStartY, touchEndY, setTouchEndY, mouseStartY, setMouseStartY, mouseEndY, setMouseEndY, startGreenText, setStartGreenText, successSeller, setSuccessSeller } = props;


  return (
    <div className="card seller-info-main">
      {/* <div className="card-body"> */}
        {/* <h2 className="card-title text-center">SELLER INFO</h2> */}
        {/* Video added below */}
        {/* <div className={`inside-card-1 `} onMouseUp={handleMouseUp} > */}

      {!unlock ?
        <video
          src={sellerVideo}
          className="seller-video"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
      />:
      <video
        src={sellerVideo2}
        className="seller-video"
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
      }
          {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default SellerInfo;
