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
            <p>Friday June 22, 2018 10:30 am</p>
            <p>Dr. Shams Kamel</p>
            <button className="btn btn-danger btn-left">Cancel</button>
            <button className="btn btn-warning">Reschedule</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Previous Appointments</div>
          <div className="card-body">
            <p>Friday May 4, 2018 1:45 pm</p>
            <p>Dr. John Cams</p>
            <p>Doctors notes: iron deficiency, patient needs to eat more meats high in iron.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Request New Appointment</div>
          <div className="card-body">
          <button className="btn btn-success btn-left">Schedule</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments;
