import React, { Component } from 'react'
import './App.css'
import EventHeader from './components/EventHeader'
import EventInfo from './components/EventInfo'
import UserInfo from './components/UserInfo'
import PaymentInfo from './components/PaymentInfo'
import OrderSummary from './components/OrderSummary'
import MiniSummary from './components/MiniSummary'
import Modal from 'react-modal'

const eventURL = 'http://localhost:3001/events/event_info'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30vw',
    height: '80vh'
  }
}

Modal.setAppElement('#root')

class App extends Component {
  constructor (props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      modalIsOpen: false,
      signInEmail: '',
      signInPassword: '',
      eventInfo: {
        time: {
          from: new Date,
          to: ''
        },
        location: {
          country: '',
          city: '',
          address: ''
        },
        logo: '',
        name: '',
        about: ''
      },
      participants: [
        {
          firstName: '',
          lastName: '',
          email: '',
          gender: 'male',
          country: 'Croatia',
          city: '',
          postalCode: '',
          companyName: '',
          companyAddress: '',
          jobTitle: '',
          diet: 'none',
          visa: false,
          packages: []
        }
      ],
      payment: {
        account: 'private',
        country: 'Croatia',
        companyName: '',
        VAT: '',
        address: '',
        city: '',
        postalCode: '',
        phone: ''
      }
    }
  }

  componentDidMount() {
    fetch(eventURL)
      .then((response) => response.json())
      .then((info) => {
        this.setState({ eventInfo: info.event })
      })
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  modalEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  }
  modalPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }

  addParticipant = () => {
    this.setState({ participants: this.state.participants.concat([{
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      country: 'Croatia',
      city: '',
      postalCode: '',
      companyName: '',
      companyAddress: '',
      jobTitle: '',
      diet: 'none',
      visa: false,
      packages: []
    }]) })
  }

  removeParticipant = (num) => {
    this.setState({participants: this.state.participants.filter((participant, i) => num !== i)})
  }

  firstNameChange = (i, event) => {
    let participants = this.state.participants
    participants[i].firstName = event.target.value
    this.setState({ participants })
  }
  lastNameChange = (i, event) => {
    let participants = this.state.participants
    participants[i].lastName = event.target.value
    this.setState({ participants })
  }
  emailChange = (i, event) => {
    let participants = this.state.participants
    participants[i].email = event.target.value
    this.setState({ participants })
  }
  genderChange = (i, event) => {
    let participants = this.state.participants
    participants[i].gender = event.target.value
    this.setState({ participants })
  }
  countryChange = (i, event) => {
    let participants = this.state.participants
    participants[i].country = event.target.value
    this.setState({ participants })
  }
  cityChange = (i, event) => {
    let participants = this.state.participants
    participants[i].city = event.target.value
    this.setState({ participants })
  }
  postalCodeChange = (i, event) => {
    let participants = this.state.participants
    participants[i].postalCode = event.target.value
    this.setState({ participants })
  }
  companyNameChange = (i, event) => {
    let participants = this.state.participants
    participants[i].companyName = event.target.value
    this.setState({ participants })
  }
  companyAddressChange = (i, event) => {
    let participants = this.state.participants
    participants[i].companyAddress = event.target.value
    this.setState({ participants })
  }
  jobTitleChange = (i, event) => {
    let participants = this.state.participants
    participants[i].jobTitle = event.target.value
    this.setState({ participants })
  }
  dietChange = (i, event) => {
    let participants = this.state.participants
    participants[i].diet = event.target.value
    this.setState({ participants })
  }
  visaChange = (i) => {
    let participants = this.state.participants
    participants[i].visa = !participants[i].visa
    this.setState({ participants })
  }

  addPackage = (i, pckg) => {
    let participants = this.state.participants
    if (!participants[i].packages.find((item) => item.title === pckg.title)) {
      participants[i].packages = participants[i].packages.concat([pckg])
      this.setState({ participants })
    }
  }
  removePackage = (i, pckg) => {
    let participants = this.state.participants
    participants[i].packages = participants[i].packages.filter((item) => item.title !== pckg.title)
    this.setState({ participants })
  }

  paymentCountry = (event) => {
    let payment = {...this.state.payment}
    payment.country = event.target.value
    this.setState({payment})
  }
  paymentCompanyName = (event) => {
    let payment = {...this.state.payment}
    payment.companyName = event.target.value
    this.setState({payment})
  }
  paymentVAT = (event) => {
    let payment = {...this.state.payment}
    payment.VAT = event.target.value
    this.setState({payment})
  }
  paymentAddress = (event) => {
    let payment = {...this.state.payment}
    payment.address = event.target.value
    this.setState({payment})
  }
  paymentCity = (event) => {
    let payment = {...this.state.payment}
    payment.city = event.target.value
    this.setState({payment})
  }
  paymentPostalCode = (event) => {
    let payment = {...this.state.payment}
    payment.postalCode = event.target.value
    this.setState({payment})
  }
  paymentPhone = (event) => {
    let payment = {...this.state.payment}
    payment.phone = event.target.value
    this.setState({payment})
  }

  render() {
    return (
      <div className="App">
        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="modal-box">

            <div className="modal-sign-in">Sign in</div>
            <div className="create-new-account">Or create a new account</div>
            <div className="social-networks">
              <div className="social-network">in</div>
              <div className="social-network">f</div>
            </div>
            <div className="sign-in-form">
              <input type="email" placeholder="email" value={this.state.signInEmail} onChange={this.modalEmailChange} className="sign-in-field"></input>
              <input type="password" placeholder="password" value={this.state.signInPassword} onChange={this.modalPasswordChange} className="sign-in-field"></input>
              <div className="forgot-password">Forgot your password?</div>
              <button>Submit</button>
              <div className="sign-in-stay">
                <input type="checkbox" id="stay-signed-in"></input>
                <label for="stay-signed-in">Stay signed in</label>
              </div>
              <div className="legal">Terms of service</div>
              <div className="legal">Privacy policy</div>
            </div>

          </div>
        </Modal>
        <EventHeader
          eventName = {this.state.eventInfo.name}
          eventTime = {this.state.eventInfo.time}
          eventLocation = {this.state.eventInfo.location}
          eventLogo = {this.state.eventInfo.logo}
        />
        
        <MiniSummary 
          price={this.state.participants.flatMap((participant) => participant.packages.map((pckg) => pckg.currentPrice)).reduce((a, b) => a + b, 0)}
          eventTime = {this.state.eventInfo.time}
          eventLocation = {this.state.eventInfo.location}
          openModal={this.openModal}
        />
        <div className="content-container">
          <EventInfo
            info = {this.state.eventInfo.about}
          />
          <div className="participants">
            {this.state.participants.map((participant, i) => {
              return (
                <UserInfo 
                  key={i}
                  eventTime={this.state.eventInfo.time}
                  participantNum={i}
                  participant={participant}
                  removeParticipant={this.removeParticipant}
                  firstNameChange={this.firstNameChange}
                  lastNameChange={this.lastNameChange}
                  emailChange={this.emailChange}
                  genderChange={this.genderChange}
                  countryChange={this.countryChange}
                  cityChange={this.cityChange}
                  postalCodeChange={this.postalCodeChange}
                  companyNameChange={this.companyNameChange}
                  companyAddressChange={this.companyAddressChange}
                  jobTitleChange={this.jobTitleChange}
                  dietChange={this.dietChange}
                  visaChange={this.visaChange}
                  addPackage={this.addPackage}
                  removePackage={this.removePackage}
                />
              )
            })}

            <button className="add-participant" onClick={this.addParticipant}>Add participant</button>
          </div>
          <div className="payment">
            <PaymentInfo 
              paymentInfo={this.state.payment}
              paymentCountry={this.paymentCountry}
              paymentCompanyName={this.paymentCompanyName}
              paymentVAT={this.paymentVAT}
              paymentAddress={this.paymentAddress}
              paymentCity={this.paymentCity}
              paymentPostalCode={this.paymentPostalCode}
              paymentPhone={this.paymentPhone}
            />
            <OrderSummary 
              packages={this.state.participants.flatMap((participant) => participant.packages)}
            />
            <div className="sign-in" onClick={this.openModal}>
              <div className="sign-in-please">Please sign in</div>
              <div className="sign-in-explanation">In order to access all your invoices and make later changes to the registration you need to create an account. Use your e-mail, Facebook, Linkedin or Google account to sign up.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
