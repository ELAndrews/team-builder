import React from 'react';


function Form(props){

const handleFormChange = (e) => {
    if(/^[A-Za-z]+$/.test(e.target.value) || e.target.value === "") {
        console.log(e.target.value)
       props.setMemberDetails({
           ...props.memberDetails,
           [e.target.name]: e.target.value})
    }
}

const handleSubmit = (e) => {
    props.membersArray.push(props.memberDetails);
}

    return (
        <div>
            <h1>start of form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name here" 
                    onChange={handleFormChange}/> 
                </label>
                <label>email: 
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter your email here" 
                    onChange={handleFormChange}/> 
                </label>
                <label>Role: 
                    <input 
                    type="text"
                    name="role"
                    placeholder="Enter your role" 
                    onChange={handleFormChange}/> 
                </label>
            </form>
        </div>
    )
}


export default Form