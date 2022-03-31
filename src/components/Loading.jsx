import React, { memo } from 'react'
import * as S from '../styles/components/Loading'

import loading from '../assets/img/loading.svg'

function Loading() {
  return (
    <S.LoaderContainer>
      <S.Loader src={loading} alt='Loading' />
    </S.LoaderContainer>
  )
}

export default memo(Loading)
