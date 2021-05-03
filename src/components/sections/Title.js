import { useEffect, useState } from 'react';
import Confetti from '../../classes/Confetti';
import './Title.scss';
import profileImage1 from "../../images/profile1.png"; 

function Title() {
const [dummyState, setDummyState] = useState(0);

window.onresize = () => setDummyState(Math.random());

useEffect(() => {
    let container = document.getElementById("confetti-container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    for(let i = 0; i < (container.offsetWidth / 10); i++) {
        new Confetti(container);
    }
});

    return (
        <div id="title-container">
        <div id="confetti-container"/>
        <img src={profileImage1} alt="me" id="profile-image"/>
        <div className="logo"><b>J<span>am</span>es<span> D</span>aw<span>son</span></b></div>
        </div>
    );
}

export default Title;