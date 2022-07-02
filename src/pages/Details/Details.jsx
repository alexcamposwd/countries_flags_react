import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../services/api.js'
import * as S from './Details'

import Loading from '../../components/Loading'

function Details() {
  const { name } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      await api
        .get(`/name/${name}`)
        .then((res) => {
          console.log(res.data[0])
          setDetails(res.data[0])
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getData()
  }, [])

  const urlWiki = `https://pt.wikipedia.org/wiki/${details.name}`

  const populationNum = parseFloat(`${details.population}`)
  const populationValue = populationNum.toLocaleString('pt-BR')

  const areaNum = parseFloat(`${details.area}`)
  const areaValue = areaNum.toLocaleString('pt-BR')

  return (
    <S.ContainerDetails key={details.alpha3Code}>
      <S.WrapperDetails>
        <S.SectionImg>
          <img src={details.flag} alt={details.name} />
        </S.SectionImg>
        <S.SectionInfos>
          <h2>{details.name}</h2>
          <S.FieldsLocation>
            <p>
              <spam>Capital:</spam> {details.capital}
            </p>
            <p>
              <spam>Região:</spam> {details.region}
            </p>
            <p>
              <spam>SubRegião:</spam> {details.subregion}
            </p>
          </S.FieldsLocation>
          <S.FieldsData>
            <p>
              <spam>Population:</spam> {populationValue}
            </p>
            <p>
              <spam>Area:</spam> {areaValue}
            </p>
          </S.FieldsData>
          <S.FieldLink>
            <S.LinkA href={urlWiki} target='_blank' rel='noreferrer'>
              <p>Wikipédia</p>
            </S.LinkA>
          </S.FieldLink>
        </S.SectionInfos>
      </S.WrapperDetails>
      <S.Back>
        <S.BtnBack onClick={() => navigate(-1)}>back</S.BtnBack>
      </S.Back>
      {loading && <Loading />}
    </S.ContainerDetails>
  )
}

export default Details
