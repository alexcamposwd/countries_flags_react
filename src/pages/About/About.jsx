import React from 'react'
import * as S from './About'

function About() {
  return (
    <S.ContainerAbout>
      <S.SectionProject>
        <S.ProjectSubTitle>Países</S.ProjectSubTitle>
        <S.ProjectText>
          Consumo de API com a bandeira dos países e alguns dados.
        </S.ProjectText>
        <S.ProjectText>
          <li>
            <p>
              O desafio consiste no desenvolvimento de uma aplicação em React
              para apresentar visualmente as informações da api
              restcountries.com.
            </p>
          </li>
        </S.ProjectText>
        <S.ProjectSubTitle>Minha Proposta</S.ProjectSubTitle>
        <S.ProjectText>
          <li>
            <p>- EsLint e Prettier</p>
            <p>- React.lazy e React.memo</p>
            <p>- Styled Components</p>
            <p>- Arquivos disponibilizados no GitHub e Deploy no Heroku.</p>
          </li>
        </S.ProjectText>
      </S.SectionProject>
      <S.Underline />
    </S.ContainerAbout>
  )
}

export default About
