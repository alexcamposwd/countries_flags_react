import styled from 'styled-components'

export const FieldSearch = styled.article `
  display: flex;
  width: 400px;
  height: 70px;
  padding: 7px;

  @media (max-width: 750px) {
    width: 300px;
  }
  @media (max-width: 630px) {
    width: 200px;
  }
`

export const InputSearch = styled.input `
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  padding: 5px;
  border: none;
  margin-top: 14px;
  color: ${(props) => props.theme.colors.primary3};
  background-color: ${(props) => props.theme.colors.primary13};

  @media (max-width: 750px) {
    font-size: 13px;
  }
  @media (max-width: 630px) {
    font-size: 12px;
  }

  &::placeholder  {
    color: ${(props) => props.theme.colors.primary3};
  }

  &::-webkit-search-cancel-button {
    color: ${(props) => props.theme.colors.primary3};
  }
`