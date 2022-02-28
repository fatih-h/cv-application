import React from "react";

function CvEdu(props) {
    const { school, study, startStudy, endStudy } = props.part;
    return (
        <div className="cvedu">
            <p>{school}</p>
            <p>{study}</p>
            <p>{startStudy}</p>
            <p>{endStudy}</p>
        </div>
    );
}

export default CvEdu;
