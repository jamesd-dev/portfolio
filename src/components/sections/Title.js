import { useEffect, useState } from 'react';
import Confetti from '../../classes/Confetti';
import './Title.scss';

function Title() {
const [dummyState, setDummyState] = useState(0);

window.onresize = () => setDummyState(Math.random());

useEffect(() => {
    let container = document.getElementById("title-container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    for(let i = 0; i < (container.offsetWidth / 10); i++) {
        new Confetti(container);
    }
});

    return (
        <div id="title-container">
        </div>
    );
}

export default Title;