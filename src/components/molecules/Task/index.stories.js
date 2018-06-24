import React from 'react'
import { storiesOf } from '@storybook/react'
import Task from './index'

storiesOf('Task', module)
  .add('default', () => (
    <Task />
  ))
  .add('completed task', () => (
    <Task initialMode="completed" />
  ))
  .add('uncompleted task', () => (
    <Task initialMode="uncompleted" />
  ))
