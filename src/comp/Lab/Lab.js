import React from 'react'
import './Lab.css'

class Lab extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    return(
      <div className="Lab">
        <div className="card">
          <div className="card-header">MRI Scans</div>
          <div className="card-body">
          </div>
        </div>
        <div className="card">
          <div className="card-header">Bloodtest Results</div>
          <div className="card-body">
          </div>
        </div>
        <div className="card">
          <div className="card-header">X-Rays</div>
          <div className="card-body">
          </div>
        </div>
      </div>
    )
  }
}

export default Lab;
