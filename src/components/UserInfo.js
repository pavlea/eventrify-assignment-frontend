import React from 'react'
import SelectCountry from './SelectCountry'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      package: '',
      accommodation: 1,
      departure: new Date(),
      arrival: new Date(),
      accommodationPackage: ''
    }
  }

  selectCountry = (event) => {
    this.props.countryChange(this.props.participantNum, event)
  }

  displayEventPackage = () => {
    if (this.state.package === 'event') {
      this.setState({package: '' })
    } else {
      this.setState({ package: 'event' })
    }
  }
  displaySpecialPackage = () => {
    if (this.state.package === 'special') {
      this.setState({ package: '' })
    } else {
      this.setState({ package: 'special' })
    }
  }
  displayAccommodationPackage = () => {
    if (this.state.package === 'accommodation') {
      this.setState({ package: '' })
    } else {
      this.setState({ package: 'accommodation' })
    }
  }
  displayAccommodationOptions = (phase) => {
    this.setState({ accommodation: phase })
  }
  arrivalChange = (event) => {
    this.setState({ arrival: event.target.value })
  }
  departureChange = (event) => {
    this.setState({ departure: event.target.value })
  }
  confirmAccommodation = (phase) => {
    if (this.state.departure > this.state.arrival) {
      this.displayAccommodationOptions(phase)
    } else {
      alert('Please enter valid arrival and departure dates')
    }
  }
  selectAccomodation = (pckg) => {
    this.displayAccommodationOptions(4)
    this.setState({ accommodationPackage: pckg })
  }
  confirmAccommodationPackage = () => {
    this.props.addPackage(this.props.participantNum, this.state.accommodationPackage)
    this.displayAccommodationOptions(4)
    this.setState({ package: ''})
  }

  addPackage = (item) => {
    this.setState({ package: ''})
    this.props.addPackage(this.props.participantNum, item)
  }

  render () {
    const eventPasses = [
      {title: 'REGISTRATION FEE Adriatic – Ionian participants', currentPrice: 325.00, fullPrice: 3325.00, currency:'HRK'},
      {title: 'REGISTRATION FEE Academia & Governments', currentPrice: 1000.00, fullPrice: 3325.00, currency:'HRK'},
      {title: 'REGISTRATION FEE IRF Fellow', currentPrice: 3325.00, fullPrice: 3325.00, currency:'HRK'},
      {title: 'REGISTRATION FEE Exhibitor', currentPrice: 3325.00, fullPrice: 3325.00, currency:'HRK'},
      {title: 'REGISTRATION FEE International participants (ERF & IRF Members)', currentPrice: 4525.00, fullPrice: 4525.00, currency:'HRK'},
      {title: 'REGISTRATION FEE International participants (non-members)', currentPrice: 5700, fullPrice: 5700.00, currency:'HRK'},
      {title: 'SPOUSES (includes site visits & gala dinner)', currentPrice: 900.00, fullPrice: 900.00, currency:'HRK'}
    ]
    const specialOffers = [{title: 'LUNCH & GALA DINNER PACKAGE', currentPrice: 900.00, fullPrice: 900.00, currency: 'HRK'}]
    const accommodationOffers = [
      {room: 'Hotel Lacroma 4*, single person', pricePerNight: 860.00},
      {room: 'Hotel Lacroma 4*, two persons', pricePerNight: 1070},
      {room: 'Hotel Agrosy 4*, single person', pricePerNight: 860.00},
      {room: 'Hotel Agrosy 4*, two persons', pricePerNight: 1070.00},
      {room: 'Hotel President 5*, single person', pricePerNight: 1050.00},
      {room: 'Hotel President 5*, two persons', pricePerNight: 1170.00}
    ]
    return (
      <div>
        <div className="user-info">
          <div className="user-name">{(this.props.participant.firstName === '' && this.props.participant.lastName === '') ? `Participant ${this.props.participantNum + 1}` : `${this.props.participant.firstName} ${this.props.participant.lastName}`}</div>
          <div className="user-form">
            <input placeholder="First Name*" value={this.props.participant.firstName} required onChange={(e) => this.props.firstNameChange(this.props.participantNum, e)}></input>
            <input placeholder="Last Name*" value={this.props.participant.lastName} required onChange={(e) => this.props.lastNameChange(this.props.participantNum, e)}></input>
            <input placeholder="Email*" value={this.props.participant.email} type="email" required onChange={(e) => this.props.emailChange(this.props.participantNum, e)}></input>
            <div>
              <label for="gender">Gender</label> <br></br>
              <select id="gender" name="gender" onChange={(e) => this.props.genderChange(this.props.participantNum, e)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <SelectCountry  countryChange={this.countryChange} />
            </div>
            <input placeholder="City*" value={this.props.participant.city} required onChange={(e) => this.props.cityChange(this.props.participantNum, e)}></input>
            <input placeholder="Postal Code*" value={this.props.participant.postalCode} required onChange={(e) => this.props.postalCodeChange(this.props.participantNum, e)}></input>
            <input placeholder="Company Name*" value={this.props.participant.companyName} required onChange={(e) => this.props.companyNameChange(this.props.participantNum, e)}></input>
            <input placeholder="Company Address" value={this.props.participant.companyAddress} onChange={(e) => this.props.companyAddressChange(this.props.participantNum, e)}></input>
            <input placeholder="Job Title*" value={this.props.participant.jobTitle} required onChange={(e) => this.props.jobTitleChange(this.props.participantNum, e)}></input>
            <div>
              <label for="nutritional-restrictions">Nutritional Restrictions*</label> <br></br>
              <select id="nutritional-restrictions" name="nutritional-restrictions" onChange={(e) => this.props.dietChange(this.props.participantNum, e)}>
                <option value="none">None</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="halal">HALAL</option>
                <option value="gluten-free">Gluten free</option>
              </select>
            </div>
            <div className="visa">
              <input type="checkbox" id="visa-check" name="visa" onChange={() => this.props.visaChange(this.props.participantNum)}></input>
              <label for="visa">This participant requires visa*</label>
            </div>
            <div>* Please fill all required fields</div>
          </div>

          <div className="active-packages">
            {this.props.participant.packages.map((pckg, i) => {
              return (
                <div key={i} className="active-package">
                  <div>{pckg.title}</div>
                  <div className="active-package-price">
                    <div>{pckg.currentPrice === pckg.fullPrice ? 
                      <div>{`${pckg.fullPrice} ${pckg.currency}`}</div> 
                      : 
                      <div>{`${pckg.currentPrice} `}<span>{pckg.fullPrice}</span>{` ${pckg.currency}`}</div>
                    }</div>
                    <div><button onClick={() => this.props.removePackage(this.props.participantNum, pckg)}>X</button></div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="package">
            Create your package
            <div className="package-groups">
              <div className="package-group" onClick={this.displayEventPackage}>Event passes</div>
              <div className="package-group" onClick={this.displaySpecialPackage}>Special offers</div>
              <div className="package-group" onClick={this.displayAccommodationPackage}>Accommodation</div>
            </div>
            <div className="package-options" >
              {this.state.package === 'event' && 
                <div>
                  Select one of our event passes.
                  <div>
                    {eventPasses.map((item, i) => {
                      return (
                        <div className="package-offer" key={i} onClick={() => this.addPackage(item)}>
                          <div>{item.title}</div>
                          <div>{item.currentPrice === item.fullPrice ? 
                            <div>{`${item.fullPrice} ${item.currency}`}</div> 
                            : 
                            <div>{`${item.currentPrice} `}<span>{item.fullPrice}</span>{` ${item.currency}`}</div>
                          }</div>
                        </div>
                      )
                    })}
                  </div>
                  Please bear in mind that some event passes are limited in quantity.
                </div>}
                {this.state.package === 'special' && 
                <div>
                  Select one of our special offers.
                  <div>
                    {specialOffers.map((item, i) => {
                      return (
                        <div className="package-offer" key={i} onClick={() => this.addPackage(item)}>
                          <div>{item.title}</div>
                          <div>{item.currentPrice === item.fullPrice ? 
                            <div>{`${item.fullPrice} ${item.currency}`}</div> 
                            : 
                            <div>{`${item.currentPrice} `}<span>{item.fullPrice}</span>{` ${item.currency}`}</div>
                          }</div>
                        </div>
                      )
                    })}
                  </div>
                  All of our special offers are subject to availability and change. Please bear in mind that only a certain number of tickets are available for this special offers. You might not be able to get this special offers at later date.
                </div>}
                {this.state.package === 'accommodation' && 
                <div>

                    {this.state.accommodation === 1 &&
                    <div className="accommodation-1">
                      <div>
                        For your stay, we have allocated a number of accommodation options close to the symposium venue. <br></br>
                        Would you like to see our special offers for accommodation?
                      </div>
                      <button onClick={() => this.displayAccommodationOptions(2)}>Great, I'm in</button>
                      <button onClick={this.displayAccommodationPackage}>I will arrange accommodation by myself</button>
                      <div>
                        Due to a limited number of rooms per each hotel, we encourage you to make your booking as soon as possible.
                      </div>
                    </div>
                    }
                    {this.state.accommodation === 2 && 
                    <div className="accommodation-2">
                      What is your date of arrival and departure?
                      <div className="arrival-departure">
                        <div>
                          Arrival
                          <input type="date" onChange={this.arrivalChange} value={this.state.arrival}></input>
                        </div>
                        <div>
                          Departure
                          <input type="date" onChange={this.departureChange}></input>
                        </div>
                      </div>
                        <button onClick={() => this.confirmAccommodation(3)}>Confirm</button>
                        <button onClick={() => this.displayAccommodationOptions(1)}>Back</button>
                    </div>
                    }
                    {this.state.accommodation === 3 &&
                    <div>
                      Based on your arrival and departure date we can offer you the following options:
                      <div className="accommodation-3">
                        {accommodationOffers.map((offer) => {
                          const nights = (new Date(this.state.departure).getTime() - new Date(this.state.arrival).getTime()) / (1000*60*60*24)
                          return(
                            <div><button onClick={() => this.selectAccomodation({title: offer.room, currentPrice: nights * offer.pricePerNight, fullPrice: nights * offer.pricePerNight, currency: 'HRK'})}>
                              {`${offer.room} (${nights} nights) ${nights * offer.pricePerNight} HRK`}
                            </button></div>
                          )
                        })}
                        <div><button onClick={() => this.displayAccommodationOptions(2)}>I want to change dates</button></div>
                      </div>
                    </div>
                    }
                    {this.state.accommodation === 4 &&
                    <div className="accommodation-4">
                      <div>{`You have selected ${this.state.accommodationPackage.title} from ${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date(this.state.arrival))} ${new Date(this.state.arrival).getDate()} until ${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date(this.state.departure))} ${new Date(this.state.departure).getDate()}. In case this is OK, we will add it to your cart.`}</div>
                      <div>
                        <button onClick={this.confirmAccommodationPackage}>Yes, this is OK</button>
                        <button onClick={() => this.displayAccommodationOptions(1)}>Dismiss</button>
                      </div>
                    </div>
                    }
                </div>}
            </div>
          </div>
        </div>
        <div className="remove-participant">
          {this.props.participantNum === 0 ? '' : <button onClick={() => this.props.removeParticipant(this.props.participantNum)}>Remove participant</button>}
        </div>
      </div>
    )
  }
}

export default UserInfo