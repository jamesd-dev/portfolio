import { MIN_SCREEN_WIDTH } from '../Constants';
import './ScreenApologyMessage.scss';
import MuiButton from './mui/MuiButton';
import CvDownloadLink from './CvDownloadLink';

function ScreenApologyMessage() {
    return (
        <div id="apology-message-container">
            <div id="apology-message">
                <p>
                    Errk! Embarrassingly, this site doesn't work on small screens.<br/>
                    I used all that time to make fun content instead!<br/>
                    Try again on a chonkier screen.<br/><br/>
                    If you just need my cv, please use the link below!
                </p>
            </div>
            <CvDownloadLink/>
        </div>
    );
}

export default ScreenApologyMessage;