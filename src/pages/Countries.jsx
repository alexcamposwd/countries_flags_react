import React, { memo } from 'react'
import * as S from '../styles/pages/Countries'
import List from '../components/List'

function Countries() {
  return (
    <S.ContainerCountries>
      <List />
    </S.ContainerCountries>
  )
}

export default memo(Countries)
