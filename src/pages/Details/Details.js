import styled from 'styled-components'

export const ContainerDetails = styled.main `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  margin: 0 auto;
`

export const WrapperDetails = styled.article `
  display: flex;
  width: 100%;
  height: 90%;
  margin: 0 auto;
  justify-content: space-around;
`

export const SectionImg = styled.section `
  display: flex;
  flex-direction: column;
  width: 55%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 30px;

  img {
    width: 100%;
    margin-top: 20px;
    max-width: 740px;
  }
`

export const SectionInfos = styled.section `
  display: flex;
  flex-direction: column;
  width: 30%;
  height:auto;
  padding-top: 100px;

  h2 {
    font-size: 35px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary3};
    padding: 20px;
    text-align: center;
  }
`

export const FieldsLocation = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  p {
    font-size: 22px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary3};
    margin-bottom: 10px;

    spam {
      font-weight: 400;
    }
  }

`

export const FieldsData = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  p {
    font-size: 22px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary3};
    margin-bottom: 10px;

    spam {
      font-weight: 400;
    }
  }
`

export const FieldLink = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

export const LinkA = styled.a `
    width: 100px;
    font-size: 24px;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.colors.primary3};
    transition: .3s ease-in-out;

    &:hover {
      text-decoration: underline;
      font-weight: bold;
    }
`
export const Back = styled.div `
  width: 100%;
  height: 30px;
  text-align: end;
`

export const BtnBack = styled.button `
  width: 100px;
  height: 30px;
  border-radius: 7px;
  font-size: 15px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.primary3};
  color: ${(props) => props.theme.colors.primary2};
  text-align: center;
  margin-right: 50px;
  border: none;
  cursor: pointer;
`