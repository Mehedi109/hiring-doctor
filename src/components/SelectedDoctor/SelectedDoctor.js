import React from 'react';
import "./SelectedDoctor.css";

const SelectedDoctor = (props) => {
    const { selectedDoctor } = props; //destructuring
    let totalQuantity = 0;
    let totalSalary = 0;
    let selectedName = '';
    for (const doctor of selectedDoctor) {
        if (!selectedDoctor.quantity) {
            selectedDoctor.quantity = 1
        }
        totalQuantity = totalQuantity + selectedDoctor.quantity;
        totalSalary = totalSalary + doctor.salary;
        selectedName = selectedName + doctor.name;
    }
    return (
        <div className="selected-doctor">
            <div className="total-added-info">
                <h5>Total Hired : {totalQuantity}</h5>
                <h5>Total Salaries : ${totalSalary}</h5>
            </div>
            <h4>Hired Doctors List</h4>
            <div className="selected-doctors-info">
                <h5>See the name of the list :</h5>
                <h6 style={{ display: 'block' }}> {selectedName}</h6>
            </div>
        </div>
    );
};

export default SelectedDoctor;