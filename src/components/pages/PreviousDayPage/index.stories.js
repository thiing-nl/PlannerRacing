// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import PreviousDayPage from './index'

storiesOf('PreviousDayPage', module)
  .add('default', () => (
    <PreviousDayPage />
  ))
