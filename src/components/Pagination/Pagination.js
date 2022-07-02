import styled from 'styled-components'

export const ContainerPagination = styled.article `
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  gap: 20px;
`
export const SectionBtn = styled.section `
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  gap: 5px;

  @media (max-width: 750px) {
      width: 250pxpx;
      font-size: 13px;
      
    }
    @media (max-width: 630px) {
      font-size: 12px;
    }

  button {
    display: flex;
    width: 35px;
    height: 22px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary8};
    color: ${(props) => props.theme.colors.primary3};
    opacity: .8;
    cursor: pointer;

    @media (max-width: 750px) {
      width: 25px;
      height: 17px;
      font-size: 13px;
    }
    @media (max-width: 630px) {
      font-size: 12px;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.primary15};
      font-size: 16px;
      font-weight: 600;
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.primary15};
      font-size: 16px;
      font-weight: 600;
      opacity: 1;
    }
  }
`

export const SectionSelect = styled.section `
  display: flex;
  width: 100px;
  height: auto;
  justify-content: flex-end;
  gap: 5px;
  margin-right: 30px;

  select {
    width: 60px;
    height: 25px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.primary8};
    color: ${(props) => props.theme.colors.primary3};
    opacity: .8;
    cursor: pointer;

    @media (max-width: 750px) {
      width: 50px;
      font-size: 13px;
    }
    @media (max-width: 630px) {
      width: 40px;
      font-size: 12px;
    } 
  }
`