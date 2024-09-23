import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const ValidSellerInfo = (props) => {
    const { unlock, setUnlock, showErrorSeller, setShowErrorSeller, startGreenText, setStartGreenText, successSeller, setSuccessSeller } = props;

    // Effect to trigger typing one by one
    useEffect(() => {
        const timeouts = [];
        startGreenText.forEach((_, i) => {
            timeouts.push(setTimeout(() => {
                setStartGreenText((prev) => {
                    const newArr = [...prev];
                    newArr[i] = true;
                    return newArr;
                });
                i == 12 && setSuccessSeller(true);
            }, i *500)); // Adjust timing as per your need
        });

        const timeoutId = setTimeout(() => {
            setShowErrorSeller(true);
        }, 8000);

        

        return () => {
            timeouts.forEach((timeout) => clearTimeout(timeout));
            clearTimeout(timeoutId);
        }

    }, [unlock]);

    const renderText = (text, index) => {
        return (
            startGreenText[index] && (
                !successSeller ? (
                    <p>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(text)
                                .start();
                        }}
                        options={{
                            cursor: "", // Hide cursor
                        }}
                        />
                        </p>
                ) : (
                    <p>{text}</p>
                )
            )
        );
    }

    return (
        <div className={`row seller-body ${unlock && `unlocked-seller-2`}`}>
            <h3 className='seller-name text-start row'>
                <span className='profile-icon col-3 '>
                    <BsPersonCircle />
                </span>
                <div className='col-9 pt-2 text-center'>
                    {renderText("Rajkumar", 0)}
                </div>
            </h3>
            <div className='col-6'>
                {renderText("Address", 1)}
            </div>
            <div className='col-6 text-end'>
                {renderText("abc", 2)}
            </div>
            <div className='col-6'>
                {renderText("GST No", 3)}
            </div>
            <div className='col-6 text-end'>
                {renderText("abc", 4)}
            </div>
            <div className='col-6'>
                {renderText("Pan No", 5)}
            </div>
            <div className='col-6 text-end'>
                {renderText("abc", 6)}
            </div>
            <div className='col-6'>
                {renderText("Bank Acc", 7)}
            </div>
            <div className='col-6 text-end'>
                {renderText("abc", 8)}
            </div>
            <div className='col-6'>
                {renderText("Contact No.", 9)}
            </div>
            <div className='col-6 text-end'>
                {renderText("abc", 10)}
            </div>
            <div className='col-6'>
                {renderText("EmailID", 11)}
            </div>
            <div className='col-6 text-end'>
                {renderText("abc", 12)}
            </div>
        </div>
    )
}

export default ValidSellerInfo;
