import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, gender, specialities, country, age, salary, picture } = props.doctor; //desturcturing
    return (
        <div className="single-doctor">
            <div>
                <img src={picture} alt="df" />
                <h5>Name : {name}</h5>
                <h6>Gender : {gender}</h6>
                <h6>Country : {country}</h6>
                <h6>Specialities : {specialities}</h6>
                <h6>Salary : {salary}</h6>
                <h6>age : {age}</h6>
                <button onClick={() => props.hireBtn(props.doctor)} className="btn btn-primary"><i class="fab fa-hire-a-helper"></i>Hire Now</button>
            </div>
        </div>
    );
};

export default Doctor;