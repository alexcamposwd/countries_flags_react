import React, { useState, useEffect } from 'react'
import * as S from './List'

import { api } from '../../services/api'

import Card from '../Card'
import Search from '../Search'
import Select from '../Select'
import Loading from '../Loading'
import Pagination from '../Pagination'

function List() {
  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [regionSelected, setRegionSelected] = useState('')
  const [cardSelected, setCardSelected] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  // Filter API - Regions
  const filteredRegions =
    regionSelected === ''
      ? countries
      : countries.filter((country) => country.region.includes(regionSelected))

  // Filter API - Name
  const filteredCountries =
    countryName === ''
      ? filteredRegions
      : filteredRegions.filter((country) =>
          country.translations.br.toLowerCase().includes(countryName)
        )

  // Pagination
  const pages = Math.ceil(filteredCountries.length / Number(itemsPerPage))
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredCountries.slice(startIndex, endIndex)

  // Get API
  useEffect(() => {
    api
      .get('/all')
      .then((res) => {
        const { data } = res
        // console.log(data)
        setCountries(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [cardSelected])

  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerPage, countryName, regionSelected])

  // Handle Input
  const HandleSearch = (event) => {
    const data = event.target.value
    const search = data.toLowerCase()
    setCountryName(search)
  }

  // Handle Select
  const HandleSelect = (event) => {
    const selectedRegion =
      event.target.options[event.target.selectedIndex].value
    setRegionSelected(selectedRegion)
  }

  // Card Selected
  const handleChange = (event) => {
    const titleSelected = event.target.name || event.target.textContent
    const nameSelected = titleSelected
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    setCardSelected(nameSelected)
  }

  return (
    <S.ContainerList>
      <S.SearchGroup>
        <Search
          type='search'
          name='search-form'
          id='search-form'
          placeholder='Digite o nome do país'
          handleOnChange={HandleSearch}
          value={countryName.charAt(0).toUpperCase() + countryName.slice(1)}
        />
        <Select
          name='region'
          text='Escolha uma Região'
          value={regionSelected}
          handleOnChange={HandleSelect}
        />
      </S.SearchGroup>
      <S.CardsGroup>
        {currentItems.length > 0 &&
          currentItems.map((country) => (
            <Card
              key={country.alpha3Code}
              country={country.name}
              additional={country.alpha3Code}
              img={country.flags.png}
              name={country.translations.br}
              region={country.region}
              capital={country.capital}
              handleChange={handleChange}
            />
          ))}
        {loading && <Loading />}
      </S.CardsGroup>

      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </S.ContainerList>
  )
}

export default List
