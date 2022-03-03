import React, { useState } from "react";

function Info(props) {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setContact((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function submitInfo(e) {
        props.getInfo(contact);
        e.preventDefault();
    }

    const { name, email, phone } = contact;

    return (
        <div className="info">
            <div className="input-div">
                <h3>Information</h3>
                <p>Please add your contact details.</p>
                <p>Include your first name and last name.</p>
            </div>
            <form className="input-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="phone">Phone number</label>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                />
                <button onClick={submitInfo}>Add</button>
            </form>
        </div>
    );
}

export default Info;
