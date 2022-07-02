import styled from 'styled-components'

export const ContainerCard = styled.article `
  width: 280px;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const CardImg = styled.section `
  width: 100%;
  height: 180px;
  margin: 0 auto;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`

export const CardInfo = styled.section `
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px 7px;

  h2 {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary3};
    cursor: pointer;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary12};
    margin-top: 4px;
  }
`