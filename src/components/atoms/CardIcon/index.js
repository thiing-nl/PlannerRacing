import React from 'react'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const StyledCardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  
  margin: 0 auto;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  
  color: ${palette('white', 0)};
  background: #FCA311;
  
  ${ifProp('green', css`
    background: #2ECC71;
  `)};
  
  ${ifProp('red', css`
    background: #E74C3C;
  `)};
`

const CardIcon = ({ icon, ...props }) => {
  return (
    <StyledCardIcon {...props}>
      <Icon icon={icon} />
    </StyledCardIcon>
  )
}

CardIcon.propTypes = {
  icon: PropTypes.string,
  green: PropTypes.bool,
  red: PropTypes.bool,
}

CardIcon.defaultProps = {
  icon: 'car-2',
}

export default CardIcon
