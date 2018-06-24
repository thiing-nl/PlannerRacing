// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components'
import PageTemplate from '../../templates/PageTemplate'
import Card from '../../molecules/Card'

const CardList = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SelectPersonsPage = () => {
  return (
    <PageTemplate title="Who's on Today?">
      <CardList>
        <Card name="Bart van Vliet" jobRole="Developer" green />
        <Card name="Bart van Vliet" jobRole="Developer" red />
        <Card name="Bart van Vliet" jobRole="Developer" />
        <Card name="Bart van Vliet" jobRole="Developer" />
      </CardList>
    </PageTemplate>
  )
}

export default SelectPersonsPage
