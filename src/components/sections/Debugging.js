import './Debugging.scss';
import glichImage from '../../assets/images/rose.png';
import { useEffect } from 'react';

function Debugging() {

    const MAX_GLITCH_SPEED = 5;
    const MIN_GLITCH_SPEED = 6;
    const MAX_GLITCH_X_OFFSET = 2;


    useEffect(() => {
        let images = document.getElementsByClassName("glitch-image");
        for(const image of images) {
            const glitchSpeed = (Math.random() * MIN_GLITCH_SPEED - MAX_GLITCH_SPEED) + MIN_GLITCH_SPEED;
            image.style.animationDuration = glitchSpeed + "s";
            image.style.animationDelay = -Math.random() * glitchSpeed + "s";
            image.style.left = ((MAX_GLITCH_X_OFFSET / 2) - Math.random(MAX_GLITCH_X_OFFSET)) + "rem";
            image.style.transitionTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
        };
    })

    return (
        <div id="debugging-container">
            <div id="glitch-container">
                <img src={glichImage} alt="glitching rose" className="glitch-image"/>
                <img src={glichImage} alt="glitching rose" className="glitch-image"/>
                <img src={glichImage} alt="glitching rose" className="glitch-image"/>
                <img src={glichImage} alt="glitching rose" className="glitch-image"/>
                <img src={glichImage} alt="glitching rose" className="glitch-image"/>
            </div>
        </div>
    )
}

export default Debugging;