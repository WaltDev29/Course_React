import React from "react";

function WarningBanner(props) {
    return props.warning ? <div className="warning-banner">경고!</div> : null;
}

export default WarningBanner;