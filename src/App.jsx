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
            <Info getInfo={displayInfo} />
            <Edu getEdu={displayEdu} />
            <Exp getExp={displayExp} />
            <Cv
                dataInfo={information}
                dataEdu={education}
                dataExp={experience}
            />
        </div>
    );
}

export default App;
