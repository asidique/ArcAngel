import React from 'react'
import './Prescription.css'

class Prescription extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    return(
      <div className="Prescription">
        <div className="card">
          <div className="card-header">Current Prescriptions</div>
          <div className="card-body">
          </div>
        </div>
        <div className="card">
          <div className="card-header">Previous Prescriptions</div>
          <div className="card-body">
          </div>
        </div>
        <div className="card">
          <div className="card-header">Refill Warnings</div>
          <div className="card-body">
          </div>
        </div>
      </div>
    )
  }
}

export default Prescription;
