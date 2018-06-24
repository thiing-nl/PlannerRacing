import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import { font } from 'styled-theme'

const StyledHeader = styled.div`
  margin-top: 40px;
  font-family: ${font('primary')};
  color: #FCA311;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HeaderTitle = styled.h1`
  margin: 0;
  margin-top: 14px;
  font-size: 72px;
  font-weight: bold;
  text-align: center;
`
const HeaderTime = styled.h4`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`

const HeaderHr = styled.hr`
  margin: 0;
  margin-top: 13px;
  width: 325px;
  border: none;
  border-bottom: 3px solid #FCA311;
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: moment() }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({
      date: moment(),
    })
  }

  render() {
    return (
      <StyledHeader {...this.props}>
        <HeaderTime>{this.state.date.format('HH:mm A')}</HeaderTime>
        <HeaderTitle>{this.props.title}</HeaderTitle>
        <HeaderHr />
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
