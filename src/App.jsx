import React, { useState } from "react";
import Info from "./components/Info";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Cv from "./components/Cv";

function App() {
    const [information, setInformation] = useState({});
    const [education, setEducation] = useState({});
    const [experience, setExperience] = useState({});

    function displayInfo(contact) {
        setInformation(() => {
            return { ...contact };
        });
    }

    function displayEdu(education) {
        setEducation(() => {
            return { ...education };
        });
    }

    function displayExp(job) {
        setExperience(() => {
            return { ...job };
        });
    }

    return (
        <div className="app">
            <h1 className="heading">Cv Application</h1>
            <div className="form">
                <Info getInfo={displayInfo} />
                <Edu getEdu={displayEdu} />
                <Exp getExp={displayExp} />
            </div>
            <Cv
                dataInfo={information}
                dataEdu={education}
                dataExp={experience}
            />
        </div>
    );
}

export default App;
