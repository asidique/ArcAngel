import React from 'react'
import './Conversation.css'

function press(input) {
  console.log(input);
  fetch('http://localhost:3002/api/message?message=' + input, {
    method: 'POST'
  })
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      })
    })
}

function getAPIMedic() {
  fetch('', {
    method: 'POST'
  })
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      })
    })
}



class Welcome extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleMessage = this.handleMessage.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }

    handleMessage() {
      press(this.state.input);
      getAPIMedic();
    }

    updateInput(e) {
      this.setState({input: e.target.value});

    }



    render() {
      return(
        <div className="Conversation-Background">
          <div className="Conversation-LeftPane">
            <img className="Conversation-LeftPane-Pic" src='images/overview.png' />
          </div>
          <p className="Conversation-LeftPane-Name">Welcome Amr</p>
          <div className="Conversation-Message">
            <p>Message</p>
            <form id="messageForm">
              <label>
                Enter your text here:
                <input type="text" name="name" onChange={this.updateInput} />
              </label>
              <button type="button" onClick={this.handleMessage}>Enter</button>
            </form>
          </div>
        </div>
      )
    }
}


export default Welcome;
