import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import MemberList from './Components/MemberList';

function App() {

  const [memberDetails, setMemberDetails] = useState({
    name: "",
    email: "",
    role: "",
})

  return (
    <div className="App">
      <MemberList />
      <Form 
      memberDetails={memberDetails}
      setMemberDetails={setMemberDetails}/>
    </div>
  );
}

export default App;
