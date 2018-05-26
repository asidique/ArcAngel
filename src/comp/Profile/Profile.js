import React from 'react'
import './Profile.css'
import firebase from '../firebase'
import $ from 'jquery';


var ip = 0;
var thisRef;
class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileInfo: []
    }
    $.getJSON("http://api.ipify.org/?format=json", function(e) {
        ip =  e.ip.toString().replace(/\./g, "")
        console.log(ip);
          const transref = firebase.database().ref('Logins/' + ip);
           transref.on('value', snap => {
             console.log(snap);
             this.setState({
               profileInfo: Object.values(snap.val())
             })
        })
    });
  }

  componentDidMount() {


  }


  render() {
    return(
      <div className="Profile-Background">
        {
          this.state.profileInfo.map((obj, i) => {

          })
        }
      </div>
    )
  }

}

export default Profile;
