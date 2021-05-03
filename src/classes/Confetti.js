import palette from '../theme.json';

const colorPalette = [palette.primary1, palette.primary3, palette.accent1];

class Confetti {
    constructor(container) {
        this.radius = (Math.random() * 8) + 2;
        this.vy = (Math.random()) + 1;
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.x = Math.random() * container.offsetWidth;
        this.y = -this.radius;
        this.element = document.createElement('div');
        this.element.classList.add("confetti");
        container.appendChild(this.element);
    }
}

export default Confetti;