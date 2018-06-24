import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { palette, font } from 'styled-theme'
import { ifProp } from 'styled-tools'
import CircledButton from '../../atoms/CircledButton'

const StyledTask = styled.div`
  position: relative;
  font-family: ${font('primary')};
  box-sizing: border-box;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  margin-right: 18px;
  padding: 15px;
  font-size: 18px;
  margin-left: 17.5px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  
  background: ${palette('white', 0)};
  
  box-shadow: 0 10px 20px rgba(20, 33, 61, 0.19), 0 6px 6px rgba(20, 33, 61, 0.23);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${ifProp('completed', css`
    padding-left: 25px;
    text-decoration: line-through;
    font-style: italic;
    color: #2ECC71;
  `)}
  
  ${ifProp('uncompleted', css`
    padding-left: 25px;
    color: #E74C3C;
  `)}
`

const TicketText = styled.span`
  color: #FCA311;  
  
  ${ifProp('completed', css`
    color: #2ECC71;
  `)}
  
  ${ifProp('uncompleted', css`
    color: #E74C3C;
  `)}
`

const TextWrapper = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TaskText = styled.span``

const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  pointer-events: none;
  
  transform: translate(-50%, -50%)
`


class Task extends React.Component {
  static getIcon(mode) {
    switch (mode) {
      default:
      case 'completed':
        return 'check-bold'
      case 'uncompleted':
        return 'simple-remove'
    }
  }

  static getColor(mode) {
    switch (mode) {
      default:
      case 'completed':
        return 'green'
      case 'uncompleted':
        return 'red'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      mode: this.props.initialMode,
    }
  }

  render() {
    let button

    if (this.state.mode !== 'default') {
      button = (
        <ButtonWrapper>
          <CircledButton
            active
            icon={Task.getIcon(this.state.mode)}
            color={Task.getColor(this.state.mode)}
          />
        </ButtonWrapper>
      )
    }

    return (
      <StyledTask
        completed={this.state.mode === 'completed'}
        uncompleted={this.state.mode === 'uncompleted'}
      >
        {button}
        <TextWrapper title={`${this.props.ticket}: ${this.props.task}`}>
          <TicketText
            completed={this.state.mode === 'completed'}
            uncompleted={this.state.mode === 'uncompleted'}
          >
            {this.props.ticket}:&nbsp;
          </TicketText>
          <TaskText>{this.props.task}</TaskText>
        </TextWrapper>
      </StyledTask>
    )
  }
}

Task.propTypes = {
  initialMode: PropTypes.string,
  ticket: PropTypes.string,
  task: PropTypes.string,
}

Task.defaultProps = {
  initialMode: 'default',
  ticket: 'PR-10',
  task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi dignissimos dolore eaque eius exercitationem facere illum ipsam labore necessitatibus nemo, nulla omnis provident quae quos sapiente, tempore unde vero.',
}

export default Task
