// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import CircledButton from './index'

storiesOf('CircledButton', module)
  .add('yellow', () => (
    <CircledButton icon="tail-triangle-right" color="yellow" />
  ))
  .add('green', () => (
    <CircledButton icon="check-bold" color="green" />
  ))
  .add('red', () => (
    <CircledButton icon="simple-remove" color="red" />
  ))
  .add('active yellow', () => (
    <CircledButton icon="tail-triangle-right" color="yellow" active />
  ))
  .add('active green', () => (
    <CircledButton icon="check-bold" color="green" active />
  ))
  .add('active red', () => (
    <CircledButton icon="simple-remove" color="red" active />
  ))
  .add('large yellow', () => (
    <CircledButton icon="tail-triangle-right" color="yellow" large />
  ))
  .add('large green', () => (
    <CircledButton icon="check-bold" color="green" large />
  ))
  .add('large red', () => (
    <CircledButton icon="simple-remove" color="red" large />
  ))
