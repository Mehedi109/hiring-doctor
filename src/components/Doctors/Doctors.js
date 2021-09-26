import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import SelectedDoctor from '../SelectedDoctor/SelectedDoctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    const hireBtn = (doctor) => {
        const newSelectedDoctor = [...selectedDoctor, doctor];
        setSelectedDoctor(newSelectedDoctor);
    }

    return (
        <>
            <div className="doctors-container container">
                <div className="doctor">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                            hireBtn={hireBtn}
                        >
                        </Doctor>)
                    }
                </div>
                <div className="cart">
                    <SelectedDoctor selectedDoctor={selectedDoctor}></SelectedDoctor>
                </div>
            </div>
        </>
    );
};

export default Doctors;