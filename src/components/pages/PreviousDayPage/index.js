// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import moment from 'moment-business-days'
import PageTemplate from '../../templates/PageTemplate'

class PreviousDayPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Bart',
      previousDay: moment().prevBusinessDay().format('dddd'),
    }
  }

  render() {
    return (
      <PageTemplate title={`What did ${this.state.name} do ${this.state.previousDay}?`}>
        ...
      </PageTemplate>
    )
  }
}

export default PreviousDayPage
