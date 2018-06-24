/* eslint-disable jsx-a11y/aria-role */
// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette('primary', 0)};
  
  position: relative;
  width: 100%;
  height: 100%;
`

const PageTemplate = ({
  children, title, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header title={title} />
      {children}
      <Footer />
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string.isRequired,
}

export default PageTemplate
