import React from 'react'

class EventHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: Math.floor(((new Date(this.props.eventTime.from).getTime() - new Date().getTime())  % (1000 * 60)) / 1000),
      minutes: 0,
      hours: 0,
      days: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        seconds: Math.floor(((new Date(this.props.eventTime.from).getTime() - new Date().getTime())  % (1000 * 60)) / 1000),
        minutes: Math.floor(((new Date(this.props.eventTime.from).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
        hours: Math.floor(((new Date(this.props.eventTime.from).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        days: Math.floor((new Date(this.props.eventTime.from).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      })
    }, 1000)
  }


  render() {
    return (
      <div className="event-header">
        <div className="event-header-container">
          <div className="basic-info">
            <div className="event-name">
              {this.props.eventName}
              <hr></hr>
            </div>
            <div className="event-time">
              From {`${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date(this.props.eventTime.from))} ${new Date(this.props.eventTime.from).getDate()}`} to {`${new Date(this.props.eventTime.to).getDate()}, ${new Date(this.props.eventTime.to).getFullYear()}`}
            </div>
            <div className="event-location">
              {`${this.props.eventLocation.country}, ${this.props.eventLocation.city}, ${this.props.eventLocation.address}`}
            </div>
          </div>
          <div className="misc-info">
            <div className="event-logo">
              <img src={this.props.eventLogo}></img>
            </div>
            <div className="countdown">
              <div>event starts in</div>
              <div className="event-countdown">
                <div className="countdown-box">{this.state.days} <div>day</div></div>
                <div className="countdown-box">{this.state.hours} <div>hr</div></div>
                <div className="countdown-box">{this.state.minutes} <div>min</div></div>
                <div className="countdown-box">{this.state.seconds} <div>sec</div></div>
              </div>    
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventHeader