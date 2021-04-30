import React, { useState } from 'react';
import './User.css';

const User = (props) => {
    const {picture, name, gender,  email, location, phone} = props.user;
    const fullName = name.title + " " + name.first + " " + name.last;

    const [mobile, setMobile] = useState('');
    const showPhone = () => {
        setMobile(phone)
    }
    return (
        <div className="user">
           <div>
               <img src={picture.large} alt=""/>
           </div>
           <div className="user-container">
            <h3>Name: {fullName}</h3>
                <p><small><strong>Gender: </strong>{gender}</small></p>
                <p><small><strong>Location: </strong>{location.city}</small></p>
                <p><small><strong>Email: </strong>{email}</small></p>
                <p><small><strong>Phone: </strong>{mobile}</small></p>
                <button onClick={showPhone}>Show Phone Number</button>

                <button onClick={() => props.addhandleClick(fullName)}>Add Me</button>
           </div>
        </div>
        
        
    );
};

export default User;