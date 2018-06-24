import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { palette, font } from 'styled-theme'
import { ifProp } from 'styled-tools'
import CardIcon from '../../atoms/CardIcon'
import CircledButton from '../../atoms/CircledButton'

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 280px;
  border-radius: 5px;
  margin-right: 30px;
  overflow: hidden;
  padding: 30px 15px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: ${palette('white', 0)};
  border: solid 3px ${palette('white', 0)};
  
  box-shadow: 0 10px 20px rgba(20, 33, 61, 0.19), 0 6px 6px rgba(20, 33, 61, 0.23);
  
  &:last-child {
    margin-right: 0;
  }
  
  ${ifProp('minimal', css`
    justify-content: center;
  `)};
  
  ${ifProp('green', css`
    border-color: #2ECC71;
  `)};
  
  ${ifProp('red', css`
    border-color: #E74C3C;
  `)};
`

const CardText = styled.h3`
  font-family: ${font('primary')};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-top: 12px;
  color: #14213D;
`

const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  
  & > button {
    margin-right: 10px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`

const CardRole = styled.h5`
  font-family: ${font('primary')};
  font-size: 12px;
  color: #FCA311;
  font-weight: normal;
  margin: 0;
  margin-top: 1.5px;
  
  ${ifProp('green', css`
    color: #2ECC71;
  `)};
  
  ${ifProp('red', css`
    color: #E74C3C;
  `)};
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: props.initialMode,
    }
  }

  handleClick(mode) {
    if (this.state.mode === mode) {
      this.setState({
        mode: 'default',
      })
      return
    }

    this.setState({
      mode,
    })
  }

  render() {
    const green = this.state.mode === 'accepted'
    const red = this.state.mode === 'denied'
    let buttons

    if (this.props.minimal !== true) {
      buttons = (
        <CardButtons>
          <CircledButton
            icon="simple-remove"
            color="red"
            active={red}
            onClick={() => this.handleClick('denied')}
          />
          <CircledButton
            icon="check-bold"
            color="green"
            active={green}
            onClick={() => this.handleClick('accepted')}
          />
        </CardButtons>
      )
    }

    return (
      <StyledCard
        minimal={this.props.minimal}
        green={green}
        red={red}
      >
        <CardIcon
          green={green}
          red={red}
        />
        <CardText>{this.props.name}</CardText>
        <CardRole
          green={green}
          red={red}
        >
          {this.props.jobRole}
        </CardRole>
        {buttons}
      </StyledCard>
    )
  }
}

Card.propTypes = {
  initialMode: PropTypes.string,
  name: PropTypes.string,
  jobRole: PropTypes.string,
  minimal: PropTypes.bool,
}

Card.defaultProps = {
  initialMode: 'default',
}

export default Card
