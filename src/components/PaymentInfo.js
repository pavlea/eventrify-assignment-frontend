import React from 'react'
import SelectCountry from './SelectCountry'

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: 'private'
    }
  }

  changeAccountType = (event) => {
    this.setState({ account: event.target.value})
  }

  render() {
    return (
      <div className="payment-info">
        <div className="enter-payment">Enter your payment info</div> 
        <div className="choose-account">Choose your account type</div>
        <div className="account-type">
          <div className="account-type-option">
            <input type="radio" value="private" name="account" id="private-account" checked={this.state.account === 'private'} onChange={this.changeAccountType}></input>
            <label for="private-account">Private account</label>
            <div>
              {this.state.account === 'private' &&
                <div>
                  <SelectCountry countryChange={this.props.paymentCountry} />
                  <div>* Please fill all required fields</div>
                </div>
              }
            </div>
          </div>
          <div className="account-type-option">
            <input type="radio" value="company" name="account" id="company-account" checked={this.state.account === 'company'} onChange={this.changeAccountType}></input>
            <label for="company-account">Company account</label>
            <div>
              {this.state.account === 'company' &&
                <div className="company-account-form">
                  <input placeholder="Company name*" required value={this.props.paymentInfo.companyName} onChange={this.props.paymentCompanyName}></input>
                  <input placeholder="VAT" value={this.props.paymentInfo.VAT} onChange={this.props.paymentVAT}></input>
                  <input placeholder="Address*" required value={this.props.paymentInfo.address} onChange={this.props.paymentAddress}></input>
                  <input placeholder="City*" required value={this.props.paymentInfo.city} onChange={this.props.paymentCity}></input>
                  <input placeholder="Postal code*" required value={this.props.paymentInfo.postalCode} onChange={this.props.paymentPostalCode}></input>
                  <input placeholder="Phone" value={this.props.paymentInfo.phone} onChange={this.props.paymentPhone}></input>
                  <SelectCountry countryChange={this.props.paymentCountry} />
                  <div>* Please fill all required fields</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default PaymentInfo