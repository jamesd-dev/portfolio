import './ScreenApologyMessage.scss';
import CvDownloadLink from './CvDownloadLink';

function ScreenApologyMessage() {
    return (
        <div id="apology-message-container">
            <div className="apology-message">
                <p>
                    Hello!
                </p>
            </div>
            <div className="apology-message">
                <p>
                    Welcome to James Dawson's Magnificent Portfolio!
                </p>
            </div>
            <div className="apology-message">
                <p>
                    Unfortunately I didn't make this site mobile friendly<br/>
                    So please try again on a chonkier screen.
                </p>
            </div>
            <div className="apology-message">
                <p>
                    However, if you just need my cv, please use the link below!
                </p>
            </div>
            <CvDownloadLink/>
        </div>
    );
}

export default ScreenApologyMessage;