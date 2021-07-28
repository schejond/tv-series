import React from "react";
import spinnerSrc from '../../assets/tv-series-spinner.gif';

const Spinner = props => {
    return (
        <div>
            <img src={spinnerSrc} alt="spinner-icon" style={{width: '3em'}} />
        </div>
    );
}

export default Spinner;