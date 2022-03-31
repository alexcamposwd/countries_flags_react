import React, { memo } from 'react'
import * as S from '../styles/pages/About'

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
      <S.SectionProject>
        <S.DevInfo>
          <S.ProjectTitle>Autor: Alex Campos</S.ProjectTitle>
          <S.ProjectTitle>
            GitHub:
            <a href='https://github.com/alexcamposwd'>
              github.com/alexcamposwd
            </a>
          </S.ProjectTitle>
          <S.DevText>
            Sou formado em Processamento de Dados, porém fiquei longe da área
            por 20 anos e gostaria de retornar para a área através desta
            oportunidade oferecida pela Provu.
            <br />
            <spam>"Desenvolvedor em contínuo aperfeiçoamento"</spam>
          </S.DevText>
          <S.DevStacks>
            <h3>Stacks:</h3>
            <li>
              <p>html</p>
              <p>css</p>
              <p>javascript</p>
              <p>react</p>
              <p>vue</p>
              <p>nodeJS</p>
              <p>typescript</p>
              <p>mongodb</p>
              <p>postgres</p>
            </li>
          </S.DevStacks>
        </S.DevInfo>
      </S.SectionProject>
    </S.ContainerAbout>
  )
}

export default memo(About)
