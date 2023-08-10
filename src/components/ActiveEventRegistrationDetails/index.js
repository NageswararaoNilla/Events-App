import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderYetToRegisterCard = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderInitial = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderRegisterCard = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosedCard = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const getSwitchStatus = () => {
    switch (status) {
      case registrationStatusConstants.yetToRegister:
        return renderYetToRegisterCard()
      case registrationStatusConstants.registered:
        return renderRegisterCard()
      case registrationStatusConstants.registrationsClosed:
        return renderRegistrationsClosedCard()
      default:
        return renderInitial()
    }
  }

  return <div className="result-container">{getSwitchStatus(status)}</div>
}

export default ActiveEventRegistrationDetails
