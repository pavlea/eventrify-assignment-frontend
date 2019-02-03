import React from 'react'
import marked from 'marked'

class EventInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  markdown = () => ({
    __html: marked(this.props.info)
  })

  render() {
    return (
      <div dangerouslySetInnerHTML={this.markdown()} className="event-info"></div>
    )
  }
}

export default EventInfo