import React, { memo } from 'react'
import * as S from '../styles/components/Footer'

function Footer() {
  return (
    <S.FooterWrapper>
      <S.CopyRight>
        <span>Alex Campos</span> &copy; 2022
      </S.CopyRight>
    </S.FooterWrapper>
  )
}

export default memo(Footer)
