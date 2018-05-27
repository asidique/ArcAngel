import React from 'react'
import './Appointments.css'

class Appointments extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    return(
      <div className="Appointments">
        <div className="card">
          <div className="card-header">Upcoming Appointments</div>
          <div className="card-body">
            <p>Here will me a list of symptoms from the past</p>
            <p>User should be able to add a symptom and be updated here</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Previous Appointments</div>
          <div className="card-body">
            <p>Bare information here on previous appointments</p>
            <p>Stuff like dates, doctor notes, doctor info, etc.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Request New Appointment</div>
          <div className="card-body">
            <p>Give the user the option to add request a new appointment with a doctor</p>
            <p>Make a form here with a submit button. Choose from a list of healthcare providers user has on overview</p>
            <p>Put a status here to check if doctor verifies the appointment.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments;
