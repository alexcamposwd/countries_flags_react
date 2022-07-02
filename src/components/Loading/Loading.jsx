import React from 'react'
import * as S from './Loading'

import loading from '../../assets/img/loading.svg'

function Loading() {
  return (
    <S.LoaderContainer>
      <S.Loader src={loading} alt='Loading' />
    </S.LoaderContainer>
  )
}

export default Loading
