// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './index'

storiesOf('Header', module)
  .add('default', () => (
    <Header title="Default Story" />
  ))
