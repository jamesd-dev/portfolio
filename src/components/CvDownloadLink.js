import MuiButton from "./mui/MuiButton";
import './CvDownloadLink.scss';

function CvDownloadLink({muiStyles}) {
    return (
        <a href="/CV.pdf" download="james-dawson-cv" className="cv-download-link">
        <MuiButton variant="contained" muiStyles={muiStyles}>
            Download CV
        </MuiButton>
        </a>
    )
}

export default CvDownloadLink;