import React from "react";

function CvInfo(props) {
    const { name, email, phone } = props.part;
    return (
        <div className="cvinfo">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

export default CvInfo;
