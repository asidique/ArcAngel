import React from 'react'
import './Conversation.css'
import allSymptoms from '../../resources/symptoms.js'
import Profile from '../Profile/Profile'
import $ from 'jquery';

var symptomMap = null;
var userSymptoms = [];
var totalDiagnosis=[];
var diagnosisMap = null;
var wordSymptoms = [];
var firstDiagnosis;
var secondDiagnosis;

function press(input) {
  console.log(input);
  userSymptoms = [];
   wordSymptoms = [];
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
          wordSymptoms.push(symptom);
          console.log(parseInt(symptomMap.get(symptom)))
          if(symptomMap.get(symptom) == null ){
            userSymptoms.push(-1);
          }else{

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

function combination (arr) {

  let i, j, temp
  let result = []
  let arrLen = arr.length
  let power = Math.pow
  let combinations = power(2, arrLen)

  // Time & Space Complexity O (n * 2^n)

  for (i = 0; i < combinations;  i++) {
    temp = []

    for (j = 0; j < arrLen; j++) {
      // & is bitwise AND
      if ((i & power(2, j))) {
        temp.push(arr[j])
      }
    }
    result.push(temp)
  }
  return result
}
function formSymptomsMessage(){
  var res='These are the symptoms that I recognized:<br>';
  for(var i in wordSymptoms){
    res += parseInt(i)+1+'. '+wordSymptoms[i]+'<br>';
  }
  res+='If these symptoms are wrong, try rephrasing.'
}
function formDiagnosisMessage(){

}

function getAPIMedic() {
  totalDiagnosis=[];
  var symptoms = combination(userSymptoms);
  var count = 1;
  //console.log(symptoms)
  for(var i=1;i<symptoms.length;i++){
    var symptom = symptoms[i];
    //console.log('fetching')
    var token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFzc2VlbEBteS55b3JrdS5jYSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMzEwMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOC0wMy0yOCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTI3MzY2ODk1LCJuYmYiOjE1MjczNTk2OTV9.fW2JzcYGqVSQtRVckdqGb2XGGkT_Tss1JQVe_KBbZns'
    var gender = "male";
    var year_of_birth = 1996;


    fetch('https://sandbox-healthservice.priaid.ch/diagnosis?token=' + token + '&symptoms=' + JSON.stringify(symptom) + '&gender='+gender + '&year_of_birth='+year_of_birth + '&language=en-gb', {
      method: 'GET'
    })
      .then(function(response) {
        response.json().then(function(data) {
          count+=1;
        //  console.log(data);
          totalDiagnosis.push(data);
            //console.log('complete')
          //  console.log(totalDiagnosis)
            if(count == symptoms.length){
              findDiagnosis();
            }

        })
      })
  }

}

function findDiagnosis(){
  diagnosisMap = new Map();
//  console.log("diag: "+totalDiagnosis);
  var max = 0, maxD='', second = 0, secondD='';
  for(var i in totalDiagnosis){
    if(totalDiagnosis[i].length != 0){
      for(var j  = totalDiagnosis[i].length-1; j>=0;j--){
        if(totalDiagnosis[i][j].length !=0){
          var name = totalDiagnosis[i][j].Issue.Name+" ("+totalDiagnosis[i][j].Issue.ProfName+")";
          var accuracy = totalDiagnosis[i][j].Issue.Accuracy;
          var total = 0;
          if(diagnosisMap.get(name)!=null){
            total = diagnosisMap.get(name);
          }
          total += accuracy;
          if(total>=max&&maxD!=name){
            second = max;
            secondD = maxD;
            max = total;
            maxD = name;
          }
          diagnosisMap.set(name,total);
        }
      }
    }
  }
  console.log("1: "+maxD+" "+max)
  console.log("2: "+secondD+" "+second)
  firstDiagnosis = maxD;
  secondDiagnosis = secondD;
}
function allSymptomsToMap(){
  symptomMap = new Map();
  for(var s in allSymptoms){
    symptomMap.set(allSymptoms[s].Name, allSymptoms[s].ID);
    symptomMap.set(allSymptoms[s].ID,allSymptoms[s].Name);
  }
}


var thisRef;

class Conversation extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        input: '',
        IP: 0,
        visibleMessage: false
      };
      this.handleMessage = this.handleMessage.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.toggleVisibleMessage = this.toggleVisibleMessage.bind(this);
      this.startRecording = this.startRecording.bind(this);

      thisRef = this;
      //console.log(allSymptoms);
      allSymptomsToMap();

    }

    toggleVisibleMessage()  {

      this.setState({
        visibleMessage: !this.state.visibleMessage
      })
    }

    componentDidUpdate() {

    }

    startRecording(){
      fetch('http://localhost:3002/startspeech', {
        method: 'GET'
      })
        .then(function(response) {
          //console.log(response);
          firebase.database().ref('Logins/' + thisRef.state.IP).once('value', function(snap) {
            initialDataLoaded = true;
          });
        })
    }

    handleMessage() {
      press(this.state.input);
    //  getAPIMedic();
    }


    updateInput(e) {
      this.setState({input: e.target.value});
    }

    /*  <Profile IP={this.state.IP} />*/


    render() {
      return(
        <div className="Conversation-Background">
          <div className="Conversation-Container">
            <div className="Conversation-View">
              <p className="Conversation-Bubble-Text">EIGJAEOIGHEIGJAEOIGHOIAEHGOAIEOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIE</p>
              <div class="clear"></div>
              <p className="Conversation-Bubble-TextAI">EIGJAEOIGHEIGJAEOIGHOIAEHGOAIEOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIEEIGJAEOIGHOIAEHGOAIE</p>
            </div>
            <button className="Conversation-MessageIcon-Holder" onClick={this.toggleVisibleMessage}>
            <img src="/images/message2.png" className="Conversation-MessageIcon"/>
            </button>
            <button className="Conversation-MessageIcon-Holder" onClick={this.startRecording}>
            <img src="/images/microphone.png" className="Conversation-MessageIcon"/>
            </button>
            <form id="messageForm" className="Conversation-MessageForm">
              <label>
                <input type="text" name="name" className={this.state.visibleMessage ? "Conversation-MessageForm-Input" : "Conversation-MessageForm-Hidden"} onChange={this.updateInput} />
              </label>
              <button type="button" onClick={this.handleMessage} className={this.state.visibleMessage ? "Conversation-MessageForm-InputButton" : "Conversation-MessageForm-InputButton-Hidden"}>Enter</button>
            </form>
          </div>
        </div>
      )
    }
}


export default Conversation;
