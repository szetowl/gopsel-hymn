import React from 'react'
import "./PageFooter.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function PageFooter() {
    return (
        <div>
            <div className="footer-container">
                <button className="arrow-button">
                <ArrowBackIcon />
                </button>
            <button className="page-button">1</button>
            <button className="arrow-button">
                <ArrowForwardIcon />
                </button>
            </div>
        </div>
    )
}

export default PageFooter
