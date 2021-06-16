import './InfoPanel.scss';

function InfoPanel(props) {
    let {image, alt, title, subtitle, content} = props.jsonData;
    return (
        <div className="info-panel-container">
        <div className="text-content-container">
        <div className="text-content">
        <h3 className="title">{title}</h3>
        <h6 className="subtitle">{subtitle}</h6>
        <div className="line-break"/>
        <br/>
        {content.map((paragraph, index) => <><article key={index} className="content">{paragraph}</article><br/></>)}
        <div className="line-break"/>
        <ul className="button-bar">
            <li><a href="/">back</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">contact me</a></li>
            <li><a href="/">home</a></li>
        </ul>
        </div>
        </div>
        <img src={image} alt={alt}
            className="image-content"
        />
        </div>
    );
}

export default InfoPanel;