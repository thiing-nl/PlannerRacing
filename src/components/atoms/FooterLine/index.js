import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

const StyledFooterLine = styled.div`
  position: absolute;
  height: 20px;
  left: 0;
  bottom: 0;
  background: rgb(252, 163, 17);
  z-index: 25;
  
  ${ifProp('fill', css`
    width: 100%;
    background: rgba(252, 163, 17, .4);
    z-index: 10;
  `)}
  
  ${ifProp('width', css`
    width: ${({ width }) => css`${width}`};
  `)}
`

const FooterLine = ({ fill, ...props }) => (
  <StyledFooterLine fill={fill ? 1 : 0} {...props} />
)

FooterLine.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.bool,
}

export default FooterLine
