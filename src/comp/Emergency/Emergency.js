import React from 'react'
import './Emergency.css'

class Emergency extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    return(
      <div className="EmergencyPage">
        <div className="card">
          <div className="card-header">PERSONAL</div>
          <div className="card-body">
            <p>Asseel Sidique</p>
            <p>123 King Street, Toronto, ON</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">ALLERGIES</div>
          <div className="card-body">
            <p>Sinusitis : SEVERE</p>
            <p>Allergic rhinitis : MODERATE</p>
            <p>Asthma : SEVERE </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">CURRENT MEDICATION</div>
          <div className="card-body">
            <p>Tylenol : 50mg, twice daily</p>
            <p>Advil : 50mg, once daily</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">MEDICAL CONDITIONS</div>
          <div className="card-body">
            <p>Glucomia</p>
            <p>Diabetes Type A</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">OTHER</div>
          <div className="card-body">
            <p>Glucomia</p>
            <p>Diabetes Type A</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">EMERGENCY CONTACT</div>
          <div className="card-body">
            <p>Name, Relationship, 905 123 1234 </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Emergency;
