import './Icon.scss';
import clsx from 'clsx';

function Icon({iconName, className}) {
    return (
        <div className="icon">
            <i className={clsx(`fas fa-${iconName}`, className)}></i>
        </div>
    )
}

export default Icon;