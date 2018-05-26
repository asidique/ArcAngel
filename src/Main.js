import React from 'react'
import {  Switch, Route } from 'react-router-dom'
import Welcome from './comp/Welcome/Welcome'
import Conversation from './comp/Conversation/Conversation'

class Main extends React.Component {
  render() {
    return(
      <main>
        <Switch>
          <Route path="/Home" component={Welcome} />
          <Route path="/Conversation" component={Conversation}/>
        </Switch>
      </main>
    )
  }
}

export default Main;
