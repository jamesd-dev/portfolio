import { useEffect } from 'react';
import Confetti from '../../classes/Confetti';
import './Title.scss';

function Title() {
    
useEffect(() => {
    let container = document.getElementById("title-container");
new Confetti(container);
});

    return (
        <div id="title-container">
        </div>
    );
}

export default Title;