import React from 'react'
import * as S from './Pagination'

function Pagination({ pages, setCurrentPage, itemsPerPage, setItemsPerPage }) {
  return (
    <S.ContainerPagination>
      <S.SectionBtn>
        {Array.from(Array(pages), (item, index) => (
          <button
            key={index}
            value={index}
            type='button'
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        ))}
      </S.SectionBtn>
      <S.SectionSelect>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </S.SectionSelect>
    </S.ContainerPagination>
  )
}

export default Pagination
