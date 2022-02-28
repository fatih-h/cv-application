import React from "react";
import CvInfo from "./CvInfo";
import CvEdu from "./CvEdu";
import CvExp from "./CvExp";

function Cv(props) {
    return (
        <div className="cv">
            <CvInfo part={props.dataInfo} />
            <CvEdu part={props.dataEdu} />
            <CvExp part={props.dataExp} />
        </div>
    );
}

export default Cv;
