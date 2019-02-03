import React from 'react'

const MiniSummary = (props) => (
  <div className="minisummary">
    <div className="mini-sign-in" onClick={props.openModal}>Sign in</div>
    <div className="mini-order-summary">
      Order summary
      {!props.price && <div>Select your items</div>}
      {!!props.price && <div>{props.price} HRK</div>}
    </div>
    <div className="mini-info">From {`${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date(props.eventTime.from))} ${new Date(props.eventTime.from).getDate()}`} to {`${new Date(props.eventTime.to).getDate()}, ${new Date(props.eventTime.to).getFullYear()}`}</div>
    <div className="mini-info">{`${props.eventLocation.country}, ${props.eventLocation.city}, ${props.eventLocation.address}`}</div>
  </div>
)

export default MiniSummary