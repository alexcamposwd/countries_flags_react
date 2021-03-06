import React from 'react'
import * as S from './Search'

function Search({ type, name, id, value, placeholder, handleOnChange }) {
  return (
    <S.FieldSearch>
      <S.InputSearch
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </S.FieldSearch>
  )
}

export default Search
