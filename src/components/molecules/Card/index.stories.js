import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './index'

storiesOf('Card', module)
  .add('default', () => (
    <Card
      name="Bart van Vliet"
      jobRole="Developer"
    />
  ))
  .add('green', () => (
    <Card
      initialMode="accepted"
      name="Bart van Vliet"
      jobRole="Developer"
    />
  ))
  .add('red', () => (
    <Card
      initialMode="denied"
      name="Bart van Vliet"
      jobRole="Developer"
    />
  ))
  .add('minimal', () => (
    <Card
      name="Bart van Vliet"
      jobRole="Developer"
      minimal
    />
  ))
  .add('minimal green', () => (
    <Card
      initialMode="accepted"
      name="Bart van Vliet"
      jobRole="Developer"
      minimal
    />
  ))
  .add('minimal red', () => (
    <Card
      initialMode="denied"
      name="Bart van Vliet"
      jobRole="Developer"
      minimal
    />
  ))
