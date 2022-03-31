import styled from "styled-components";

export const LoaderContainer = styled.article `
  width: 100%;
  height: 100%;
  min-width: 1280px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`

export const Loader = styled.img `
  width: 70px;
`