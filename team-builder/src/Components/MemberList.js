import React from 'react';

function MemberList (props) {
    console.log(props);

        return (
            <div>
                            <div key={props.index}>
                                <h4>Name: {props.curr.name}</h4>
                                <p>Email: {props.curr.email}</p>
                                <p>Role: {props.curr.role}</p>
                            </div>

            </div>
        )
    
}

export default MemberList;