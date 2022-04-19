import React from "react";

function CvInfo(props) {
    const { name, email, phone } = props.part;
    return (
        <div className="cvinfo">
            <p className="cvinfo__name">{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

export default CvInfo;
