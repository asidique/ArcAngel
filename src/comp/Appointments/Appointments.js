import React from 'react'
import './Appointments.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Appointments extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.confirmAppointment = this.confirmAppointment.bind(this);

  }
  toggleModal() {
    this.setState({modal: !this.state.modal});
  }

  confirmAppointment() {
    this.toggleModal();
    window.alert('Your appointment has been set.');
  }

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
          <button onClick={this.toggleModal} className="btn btn-success btn-left">Schedule</button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Schedule an appointment</ModalHeader>
          <ModalBody>
            <p>Enter date and time:</p>
            <div className="input-group mb-3">
              <input id="dateTimeIn" placeholder="Monday June 4, 2018 10:30 am"/>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.confirmAppointment}>Confirm</Button>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Appointments;
