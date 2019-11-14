import React, { useState } from 'react';
import MemberList from './MemberList';



function Form (props){

  // let teamMembers = [];
  const [teamMembers, setTeamMembers] = useState([
    {
    name: 'Emma',
    email: 'emmaandrews@hotmail.com',
    role: 'UX'
  },
  {
    name: 'Matt',
    email: 'Matt@hotmail.com',
    role: 'Full-Stack Developer'
  }])
//   const [memberDetails, setMemberDetails] = useState({
//     name: "",
//     email: "",
//     role: "",
// });

  //  const handleFormChange = e => {
  //       if(/^[A-Za-z]+$/.test(e.target.value) || e.target.value === "") {
  //           setMemberDetails({
  //               ...memberDetails,
  //               [e.target.name]: e.target.value})
  //       }
  //     }
      
  const handleSubmit = e => {
    e.preventDefault();
    // e.persist();
    const newMember = {
      name: e.target.name.value,
      email: e.target.email.value,
      role: e.target.role.value
    }
    setTeamMembers(teamMembers.concat(newMember))
  }

  // const handleArrayChange = e => {
  //   console.log('array change', membersList);
  //       membersList.map((curr, index) => {
  //         return (
  //           <div key={index}>
  //             <MemberList 
  //               key={index}
  //               curr={curr}/>
  //           </div>
  //         )
  //       })
  // }


// console.log(teamMembers);
// console.log(memberDetails);

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(props.memberDetails);
    //     const newMember = {
    //     name: e.target.name.value,
    //     email: e.target.email.value,
    //     role: e.target.role.value
    //     }

    //     props.setMemberDetails(props.memberDetails.concat(newMember))

        // membersList.push(newMember);
        // props.setMemberDetails(props.memberDetails.concat(newMember))
      // };

        return (
            <div>
                <h1>Team Members Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name: 
                        <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name here" 
                        // onChange={handleFormChange}
                       /> 
                    </label>
                    <label>email: 
                        <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email here" 
                        // onChange={handleFormChange}
                        /> 
                    </label>
                    <label>Role: 
                      <select
                      type="text"
                      name="role"
                      // onChange={handleFormChange}
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
                {
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