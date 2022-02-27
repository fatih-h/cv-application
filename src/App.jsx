import React from "react";
import Info from "./components/Info";
import Edu from "./components/Edu";
import Exp from "./components/Exp";

function App() {
    function displayInfo(contact) {
        
    }

    function displayEdu(education) {
        
    }

    function displayExp(job){
        
    }

    return (
        <div className="app">
            <Info getInfo={displayInfo} />
            <Edu getEdu={displayEdu} />
            <Exp getExp={displayExp}/>
        </div>
    );
}

export default App;
