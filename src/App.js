import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
// import SignUp from './components/SignUp/SignUp'
// import SignIn from './components/SignIn/SignIn'
// import SignOut from './components/SignOut/SignOut'
// import ChangePassword from './components/ChangePassword/ChangePassword'
import About from './components/Main/About'
import Location from './components/Main/Location'
import Menu from './components/Main/Menu'

const Home = () => {
  return (
    <Fragment>
      <About/>
      <Menu />
      <Location/>
    </Fragment>
  )
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <Route path='/' exact component={Home} />
      </Fragment>
    )
  }
}

export default App
