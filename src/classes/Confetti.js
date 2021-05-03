import palette from '../theme.json';

const colorPalette = [palette.primary1, palette.primary3, palette.accent1];
const maxSpeed = 4; // seconds to reach bottom
const minSpeed = 8;
const maxSize = 5; // long edge of the confetti
const minSize = 3;

class Confetti {
    constructor(container) {

        this.length = (Math.random() * maxSize) + minSize;
        this.vy = minSpeed - (Math.random() * maxSpeed);
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.x = Math.random() * container.offsetWidth;
        this.y = -this.radius;
        this.element = document.createElement('div');
        this.element.classList.add("confetti");
        container.appendChild(this.element);
        this.element.style.left = this.x + "px";
        this.element.style.width = this.length + "px";
        this.element.style.height = this.length * 1.618 + "px";
        this.element.style.animationDuration = this.vy + "s";
        this.element.style.animationDelay =  -(Math.random() * this.vy) + "s";
        this.element.style.backgroundColor = this.color;
    }
}

export default Confetti;