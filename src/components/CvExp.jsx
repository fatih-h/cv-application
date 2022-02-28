import React from "react";

function CvExp(props) {
    const { company, title, tasks, startWork, endWork } = props.part;
    return (
        <div className="cvexp">
            <p>{company}</p>
            <p>{title}</p>
            <p>{tasks}</p>
            <p>{startWork}</p>
            <p>{endWork}</p>
        </div>
    );
}

export default CvExp;
