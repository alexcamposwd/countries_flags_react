import styled from 'styled-components'

export const ContainerHome = styled.main `
  display: flex;
  width: 100%;
  height: auto;
  min-height: 660px;
  background: ${(props) => props.theme.colors.primary14};
  justify-content: center;
  align-items: center;

  @media (max-width: 630px) {
    min-height: 500px;
    height: 610px;
  }

  img {
    width: 84%;
  }
`