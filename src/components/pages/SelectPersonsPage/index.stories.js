// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectPersonsPage from './index'

storiesOf('SelectPersonsPage', module)
  .add('default', () => (
    <SelectPersonsPage />
  ))
