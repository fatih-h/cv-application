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
        e.preventDefault();
        props.getExp(job);
        
    }
    
    const { company, title, tasks, startWork, endWork } = job;
    

    return (
        <div className="exp">
            <div className="input-div">
                <h3>Experience</h3>
                <p>
                    Please add any work, community or volunteer experience you
                    had.
                </p>
                <p>This is the most crucial part for us.</p>
            </div>
            <form className="input-form">
                <label htmlFor="company">Company name</label>
                <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={handleChange}
                />
                <label htmlFor="title">Job title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <label htmlFor="tasks">Main task</label>
                <input
                    type="text"
                    name="tasks"
                    value={tasks}
                    onChange={handleChange}
                />
                <label htmlFor="startWork">Start date</label>
                <input
                    type="text"
                    name="startWork"
                    value={startWork}
                    onChange={handleChange}
                />
                <label htmlFor="endWork">End date</label>
                <input
                    type="text"
                    name="endWork"
                    value={endWork}
                    onChange={handleChange}
                />
                <button onClick={submitExp}>Add</button>
            </form>
        </div>
    );
}

export default Exp;
