import React, { useState } from 'react';
import MemberList from './MemberList';



function Form (props){

  const [teamMembers, setTeamMembers] = useState([])
      
  const handleSubmit = e => {
    e.preventDefault();
    const newMember = {
      name: e.target.name.value,
      email: e.target.email.value,
      role: e.target.role.value
    }
    setTeamMembers(teamMembers.concat(newMember))
    e.target.reset();
  }

        return (
            <div>
                <h1>Team Members Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name: 
                        <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name here" 
                       /> 
                    </label>
                    <label>email: 
                        <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email here" 
                        /> 
                    </label>
                    <label>Role: 
                      <select
                      type="text"
                      name="role"
                      >
                        <option></option>
                        <option>UI</option>
                        <option>UX</option>
                        <option>Frontend Engineer</option>
                        <option>Backend Engineer</option>
                        <option>Full-Stack Developer</option>
                      </select>
                    </label>
                    <input type="submit" />
                </form>
                <h2>Team Members</h2>
                { teamMembers.length === 0 ? 
                      <div>
                        <p>There are no members in this team.</p>
                      </div> :
                  teamMembers.map((curr, index) => {
                    return (
                        <MemberList 
                          key={index}
                          curr={curr}/>
                          ) 
                        }) 
                }
                
      </div>
        )
 }




export default Form