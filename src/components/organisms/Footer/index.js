import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import CircledButton from '../../atoms/CircledButton'
import FooterLine from '../../atoms/FooterLine'

const StyledFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
`

const FooterButton = styled.div`
  position: absolute;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
`

const LineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const FooterIcon = styled.div`
  display: flex;
  align-items: flex-end;
  transform: translateX(-50%);

  position: absolute;
  left: ${({ left }) => css`${left}`};
  bottom: 20px;
`


// eslint-disable-next-line import/no-webpack-loader-syntax
const svg = require('!raw-loader!./FooterIcon.svg')

const Footer = ({ width, ...props }) => (
  <StyledFooter {...props}>
    <FooterButton>
      <CircledButton icon="tail-triangle-right" color="yellow" active large />
    </FooterButton>
    <LineContainer>
      <FooterIcon left={width} dangerouslySetInnerHTML={{ __html: svg }} />
      <FooterLine width={width} />
      <FooterLine fill />
    </LineContainer>
  </StyledFooter>
)

Footer.propTypes = {
  width: PropTypes.string,
}

Footer.defaultProps = {
  width: '10%',
}

export default Footer
