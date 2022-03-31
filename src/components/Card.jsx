import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import * as S from '../styles/components/Card'

function Card({ country, img, name, region, handleChange }) {
  return (
    <Link to={`/details/${country}`}>
      <S.ContainerCard onClick={handleChange}>
        <S.CardImg>
          <img src={img} alt={name} name={country} />
        </S.CardImg>
        <S.CardInfo>
          <h2>{name}</h2>
          <p>{region}</p>
        </S.CardInfo>
      </S.ContainerCard>
    </Link>
  )
}

export default memo(Card)
