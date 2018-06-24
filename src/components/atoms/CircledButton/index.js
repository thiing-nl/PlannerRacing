import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import Icon from '../Icon'

const circleButton = (hex, active = false) => {
  if (active) {
    return css`
      background: ${hex};
      color: ${palette('white', 0)};
      border-color: ${hex};
      
      &:hover {
        color: ${hex};
        background: ${palette('white', 0)};
      }
    `
  }

  return css`
    color: ${hex};
    border-color: ${hex};
    
    &:hover {
      background: ${hex};
      color: ${palette('white', 0)};
    }
  `
}

const style = ({ color, active }) => {
  switch (color) {
    case 'green':
      return circleButton('#2ECC71', active)
    case 'red':
      return circleButton('#E74C3C', active)
    case 'yellow':
    default:
      return circleButton('#FCA311', active)
  }
}

const StyledCircledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 15px;
  border-radius: 50%;
  border: solid 1px transparent; 
  background: ${palette('white', 0)};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);
  
  padding: 0;
  outline: none;
  cursor: pointer;
  
  transition: background .1s ease-out, color .1s ease-out, background .1s ease-out;
  
  ${ifProp('large', css`
    width: 70px;
    height: 70px;
    font-size: 30px;
    border-width: 2px;
  `)}
  
  ${(...props) => style(...props)}
`

const CircledButton = ({ icon, ...props }) => (
  <StyledCircledButton {...props}>
    <Icon icon={icon} />
  </StyledCircledButton>
)

CircledButton.propTypes = {
  color: PropTypes.oneOf([
    'green',
    'red',
    'yellow',
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  large: PropTypes.bool,
}

export default CircledButton
