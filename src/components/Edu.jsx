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
            <div className="input-div">
                <h3>Education</h3>
                <p>Please add your academic background.</p>
                <p>We will not directly qualify you through education.</p>
            </div>
            <form className="input-form">
                <label htmlFor="school">School name</label>
                <input
                    type="text"
                    name="school"
                    value={school}
                    onChange={handleChange}
                />
                <label htmlFor="study">Major field of study</label>
                <input
                    type="text"
                    name="study"
                    value={study}
                    onChange={handleChange}
                />
                <label htmlFor="startStudy">Start date</label>
                <input
                    type="text"
                    name="startStudy"
                    value={startStudy}
                    onChange={handleChange}
                />
                <label htmlFor="endStudy">End date</label>
                <input
                    type="text"
                    name="endStudy"
                    value={endStudy}
                    onChange={handleChange}
                />
                <button onClick={submitEdu}>Add</button>
            </form>
        </div>
    );
}

export default Edu;
