import React from 'react'
import './Medical.css'

class Medical extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.verify);
  }

  render() {
    if(this.props.verify) {
    return(
      <div className="Overview">
        <div className="card">
          <div className="card-header">Symptom Report</div>
          <div className="card-body">
            <p>Here will me a list of symptoms from the past</p>
            <p>User should be able to add a symptom and be updated here</p>
            <button className="btn btn-primary">Add New</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Immunizations</div>
          <div className="card-body">
            <p>Hepatits B, Date</p>
            <p>Diphtheria, Date</p>
            <p>Polio, Date</p>
            <p>This should prob be a table</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Blood Type</div>
          <div className="card-body">
            <p>AB+</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Allergies</div>
          <div className="card-body">
            <p>Dogs, Cats</p>
            <p>Peanuts</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Diagnosis</div>
          <div className="card-body">
            <p>Low Iron Deficiency</p>
            <p>XYZ Disease</p>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className="NoAccess">
        <div className="Space">
        </div>
        <img src="/images/lock.svg" />
        <div className="Space">
        </div>
      </div>
    )
  }
  }
}

export default Medical;
