import React, { useState } from "react";

function Exp(props) {
    const [job, setJob] = useState({
        company: "",
        title: "",
        tasks: "",
        startWork: "",
        endWork: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setJob((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function submitExp(e) {
        props.getExp(job);
        e.preventDefault();
    }

    const { company, title, tasks, startWork, endWork } = job;

    return (
        <div className="exp">
            <form>
                <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={company}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Job title"
                    value={title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="tasks"
                    placeholder="Main task"
                    value={tasks}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="startWork"
                    placeholder="Start date"
                    value={startWork}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="endWork"
                    placeholder="End date"
                    value={endWork}
                    onChange={handleChange}
                />
                <button onClick={submitExp}>Add</button>
            </form>
        </div>
    );
}

export default Exp;
