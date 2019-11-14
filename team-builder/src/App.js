import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';


function App() {
  // const [teamMembers, setTeamMembers] = useState([{}]);
//   const [memberDetails, setMemberDetails] = useState({
//     name: "",
//     email: "",
//     role: "",
// });

  return (
    <div className="App">
      <Form 
      // teamMembers={teamMembers}
      // setTeamMembers={setTeamMembers}
      // memberDetails={memberDetails}
      // setMemberDetails={setMemberDetails}
      />
    </div>
  );
}

export default App;
