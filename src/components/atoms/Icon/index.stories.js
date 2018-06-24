// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="car-2" />
  ))
