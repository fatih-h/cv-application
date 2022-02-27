import React, { useState } from "react";

function Edu(props) {
    const [education, setEducation] = useState({
        school: "",
        study: "",
        startStudy: "",
        endStudy: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setEducation((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function submitEdu(e) {
        props.getEdu(education);
        e.preventDefault();
    }

    const { school, study, startStudy, endStudy } = education;

    return (
        <div className="edu">
            <form>
                <input
                    type="text"
                    name="school"
                    placeholder="School name"
                    value={school}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="study"
                    placeholder="Major field of study"
                    value={study}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="startStudy"
                    placeholder="Start date"
                    value={startStudy}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="endStudy"
                    placeholder="End date"
                    value={endStudy}
                    onChange={handleChange}
                />
                <button onClick={submitEdu}>Add</button>
            </form>
        </div>
    );
}

export default Edu;
