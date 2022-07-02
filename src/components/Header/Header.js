import styled from 'styled-components'

export const ContainerHeader = styled.header `
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background: ${(props) => props.theme.colors.primary14};

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 0;
  }
`
export const SectionLogo = styled.section `
  display: flex;
  width: 65%;
  height: 100%;
  align-items: center;

  @media (max-width: 630px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 15px;
  }

  h1 {
    width: 100%;
    font-family: Verdana;
    font-size: 35px;
    font-weight: bold;
    line-height: 20px;
    padding-left: 40px;
    color: ${(props) => props.theme.colors.primary3};

    @media (max-width: 750px) {
      font-size: 28px;
      padding-left: 30px;
    }
    @media (max-width: 630px) {
      font-size: 28px;
      padding: 0px;
    }
  }
`

export const SectionNav = styled.nav `
  display: flex;
  width: 35%;
  height: 100%;

  @media (max-width: 630px) {
    width: 100%;
  }
`

export const ListNav = styled.ul `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: space-around;
  align-items: center;

  li {
    width: 30%;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary3};
    cursor: pointer;

    @media (max-width: 750px) {
      font-size: 14px;
    }
    @media (max-width: 630px) {
      width: auto;
      font-size: 15px;
      padding: 10px;
    }
  }
`