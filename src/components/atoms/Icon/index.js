// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ icon }) => {
  return (
    <i className={`pr-icon pr-${icon}`} />
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Icon
