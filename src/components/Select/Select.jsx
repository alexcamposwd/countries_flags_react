import React from 'react'
import * as S from './Select'

function Select({ key, text, name, value, handleOnChange }) {
  return (
    <S.ContainerSelect>
      <S.SelectText htmlFor={name}>{text}:</S.SelectText>
      <S.SelectControl
        key={key}
        name={name}
        id={name}
        value={value}
        multiple={false}
        onChange={handleOnChange}
      >
        <option value=''>All</option>
        <option value='Africa'>África</option>
        <option value='Americas'>Américas</option>
        <option value='Antarctic'>Antártico</option>
        <option value='Antarctic Ocean'>Oceano Antártico</option>
        <option value='Asia'>Ásia</option>
        <option value='Europe'>Europa</option>
        <option value='Oceania'>Oceânia</option>
        <option value='Polar'>Polar</option>
      </S.SelectControl>
    </S.ContainerSelect>
  )
}

export default Select
