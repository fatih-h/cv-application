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
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={handleChange}
                />
                <button onClick={submitInfo}>Add</button>
            </form>
        </div>
    );
}

export default Info;
