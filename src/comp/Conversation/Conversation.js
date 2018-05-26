import React from 'react'
import './Conversation.css'
import allSymptoms from '../../resources/symptoms.js'
var symptomMap = null;
var userSymptoms = [];
function press(input) {
  console.log(input);
  userSymptoms = [];
  var parsedInput = input.split('and');
  for(var i in parsedInput){
    input = parsedInput[i];
    fetch('http://localhost:3002/api/message?message=' + input, {
      method: 'POST'
    })
      .then(function(response) {
        response.json().then(function(data) {
          console.log(data.output.text);
          var symptom= data.output.text[0];
          symptom = symptom.charAt(0).toUpperCase() + symptom.substring(1);
          if(symptomMap.get(symptom) == null ){
            userSymptoms.push(-1);
          }else{
            console.log(parseInt(symptomMap.get(symptom)) + 1000)
            userSymptoms.push(parseInt(symptomMap.get(symptom)));
          }
          if(userSymptoms.length == parsedInput.length){
            removeUnkownSymptoms();
            getAPIMedic();
          }
        })
      })
  }

}
function removeUnkownSymptoms(){
for(var i in userSymptoms){
  if(userSymptoms[i]==-1){
    userSymptoms.splice(i,1);
  }
}
}
function getAPIMedic() {
  console.log('fetching')
  var token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFzc2VlbEBteS55b3JrdS5jYSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMzEwMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOC0wMy0yOCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTI3MzUzNzM4LCJuYmYiOjE1MjczNDY1Mzh9.1POvK2YN9PTae_OgUwv1xd_Yp2VZnvnLO-cTDPGHpog';
  var gender = "male";
  var year_of_birth = 1996;
  var symptoms = userSymptoms;

  fetch('https://sandbox-healthservice.priaid.ch/diagnosis?token=' + token + '&symptoms=' + JSON.stringify(symptoms) + '&gender='+gender + '&year_of_birth='+year_of_birth + '&language=en-gb', {
    method: 'GET'
  })
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
          console.log('complete')
      })
    })
}
function allSymptomsToMap(){
  symptomMap = new Map();
  for(var s in allSymptoms){
    symptomMap.set(allSymptoms[s].Name, allSymptoms[s].ID);
    symptomMap.set(allSymptoms[s].ID,allSymptoms[s].Name);
  }
}



class Welcome extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleMessage = this.handleMessage.bind(this);
      this.updateInput = this.updateInput.bind(this);
      //console.log(allSymptoms);
      allSymptomsToMap();

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
