import React, { memo } from 'react'
import * as S from '../styles/pages/Home'

import imgHome from '../assets/img/home_flags_light.jpg'

const home = () => (
  <S.ContainerHome>
    <img src={imgHome} alt='' />
  </S.ContainerHome>
)

export default memo(home)
