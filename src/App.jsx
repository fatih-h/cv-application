import React, { useState } from "react";
import Info from "./components/Info";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Cv from "./components/Cv";


function App() {
    const [information, setInformation] = useState({
        name: "Fatih Huseyinogullari",
        email: "fatih.hsu1907@gmail.com",
        phone: "5369350501",
    });
    const [education, setEducation] = useState({
        school: "IUC",
        study: "Computer Science",
        startStudy: "2018",
        endStudy: "2024"
    });
    const [experience, setExperience] = useState({
        company: "Google",
        title: "Jr.Software Engineer",
        tasks: "AngularJs",
        startWork: "2024",
        endWork: "Ongoing"
    });

    function displayInfo(contact) {
        setInformation({...contact});
    }

    function displayEdu(education) {
        setEducation({...education});
    }

    function displayExp(job) {
        setExperience({...job});
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
