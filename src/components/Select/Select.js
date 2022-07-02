import styled from 'styled-components'

export const ContainerSelect = styled.article `
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 50px;
  min-width: 140px;
  align-items: flex-end;

  @media (max-width: 750px) {
    width: 220px;
  }
  @media (max-width: 630px) {
    width: 140px;
  }
`

export const SelectText = styled.label `
  display: flex;
  width: auto;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary3};
  margin-bottom: 5px;

  @media (max-width: 750px) {
    font-size: 13px;
  }
  @media (max-width: 630px) {
    font-size: 12px;
  }
`

export const SelectControl = styled.select `
  display: flex;
  width: 160px;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary3};
  padding: 7px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary13};

  @media (max-width: 750px) {
    font-size: 13px;
  }
  @media (max-width: 630px) {
    width: 130px;
    font-size: 12px;
  }
`