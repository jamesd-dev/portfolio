import { useEffect, useState } from 'react';
import Confetti from '../../classes/Confetti';
import './Title.scss';
import profileImage1 from "../../assets/images/profile1.png"; 

function Title() {
    const [dummyState, setDummyState] = useState(0);

    const forceReload = () => setDummyState(dummyState + 1);
    const removeAllChildren = (element) => {while (element.firstChild) {element.removeChild(element.lastChild);}}
    const createConfettiEffect = () => {
        let container = document.getElementById("confetti-container");
        let numOfConfetti = container.offsetWidth / 10;
        removeAllChildren(container);
        for(let i = 0; i < numOfConfetti; i++) {
            new Confetti(container);
        }
    }

    window.onresize = forceReload;

    useEffect(() => {
        createConfettiEffect();
    });

    return (
        <div id="title-container">
            <div id="name-container">
                <div id="confetti-container"></div>
                <h1 id="title-name">J<span>am</span>es<span> D</span>aw<span>son</span></h1>
            </div>
            <div id="profession-container">
                <img src={profileImage1} alt="me" id="profile-image"/>
                <h2 id="title-profession">Game Developer</h2>
            </div>
        </div>
    );
}

export default Title;