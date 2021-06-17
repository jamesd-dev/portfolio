import MuiButton from "./mui/MuiButton";
import './CvDownloadLink.scss';

function CvDownloadLink() {
    return (
        <a href="/CV.pdf" download="james-dawson-cv">
        <MuiButton variant="contained">
            Download CV
        </MuiButton>
        </a>
    )
}

export default CvDownloadLink;