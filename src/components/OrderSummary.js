import React from 'react'

class OrderSummary extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let items = []
    let totalCharge = 0
    this.props.packages.forEach((pckg) => {
      totalCharge += pckg.currentPrice
      if (items.find((item) => item.title === pckg.title)) {
        items[items.findIndex((item) => item.title === pckg.title)].quantity++
      } else {
        items.push(pckg)
        items[items.length - 1].quantity = 1
      }
    })

    return (
      <div>
        <div className="order-summary">Order summary</div>
        {items.length === 0 && <div className="order-no-items">Please select your items above</div>}
        {items.length > 0 && <div className="total-charge">Total charge: {totalCharge} HRK</div>}
        <div>
          {items.length > 0 &&
          <div className="order-categories" id="order-category-names">
            <div className="order-qty">QTY</div>
            <div className="order-item">ITEM</div>
          </div>
          }
          {items.map((item) => (
            <div className="order-categories">
              <div className="order-qty">{item.quantity}</div>
              <div className="order-item">{item.title}</div>
            </div>
          ))}
        </div>
        <div>Invoice and confirmation for your order will be sent to your E-mail.</div>
        {!items.find((item) => item.title.includes('Hotel')) &&
          <div className="no-package-group-selected">You have not selected a special offer for accomodation. <br></br>
            Due to a limited number of rooms per each hotel, we encourage you to make your booking as soon as possible.
          </div>
        }
        {!items.find((item) => item.title.includes('DINNER PACKAGE')) &&
          <div className="no-package-group-selected">You have not selected any of our special offers. <br></br>
            All of our special offers are subject to availability and change. Please bear in mind that only a certain number of tickets are available for this special offers. You might not be able to get this special offers at later date.
          </div>
        }
        <div>
          <div><input type="checkbox" id="terms" name="terms"></input><label for="terms">I accept the Terms of service and Privacy policy*</label></div>
          <div><input type="checkbox" id="conference-conditions" name="conference-conditions"></input><label for="terms">I accept the General Terms and Conditions of the conference*</label></div>
          <div><input type="checkbox" id="eventrify-terms" name="eventrify-terms"></input><label for="terms">I accept the default Eventrify platform usage and contact permissions*</label></div>
        </div>
      </div>
    )
  }
}

export default OrderSummary