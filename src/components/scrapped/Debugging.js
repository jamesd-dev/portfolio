import './Debugging.scss';
import glitchImage from '../../assets/images/cutout_statue.png';
import { useEffect } from 'react';

function Debugging() {

    const MAX_GLITCH_SPEED = 7;
    const MIN_GLITCH_SPEED = 10;
    const MAX_GLITCH_X_OFFSET = 2;


    useEffect(() => {
        let images = document.getElementsByClassName("glitch-image");
        for(let i = 0; i < images.length; i++) {
            const glitchSpeed = (Math.random() * (MIN_GLITCH_SPEED - MAX_GLITCH_SPEED)) + MAX_GLITCH_SPEED;
            images[i].style.animationDuration = glitchSpeed + "s";
            images[i].style.animationDelay = (Math.random() * glitchSpeed) - (glitchSpeed / 2) + "s";
            images[i].style.transitionTimingFunction = `linear`;
            if(i > 0) {
                if(i % 2 === 0) {
                    images[i].style.filter = `hue-rotate(-20deg) saturate(${(Math.random() * 200) + 500}%)`;
                    images[i].style.zIndex = 0;
                }
                images[i].style.left = (Math.random(MAX_GLITCH_X_OFFSET) - (MAX_GLITCH_X_OFFSET / 2)) + "rem";
            }
        };
    })

    return (
        <div id="debugging-container">
            <div id="glitch-container">
                <img src={glitchImage} alt="glitch" className="glitch-image"/>
                <img src={glitchImage} alt="glitch" className="glitch-image"/>
                <img src={glitchImage} alt="glitch" className="glitch-image"/>
                <img src={glitchImage} alt="glitch" className="glitch-image"/>
                <img src={glitchImage} alt="glitch" className="glitch-image"/>
            </div>
            <div id="description-container">
                <h3 id="title">Debugging</h3>
                <div className="line"/>
                <article id="description">
                    In my first job as a junior front-end developer, 
                </article>
                <div className="line"/>
            </div>
        </div>
    )
}

export default Debugging;