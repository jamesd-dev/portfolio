import './Profile.scss';
import CvDownloadLink from '../CvDownloadLink';
import {accent1, primary3} from '../../theme.json';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Icon from '../Icon';

const useStyles = makeStyles(() => createStyles({
    root: {
        background: accent1,
        color: primary3,
        '&:hover': {
            background: accent1
        },
    }
}))

function Profile() {
    const classes = useStyles();

    return (
        <div id="profile-container">
            <div id="contact-panel">
                <CvDownloadLink muiStyles={classes.root}/>
            </div>
        </div>
    )
}

export default Profile;