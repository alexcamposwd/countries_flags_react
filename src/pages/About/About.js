import styled from 'styled-components'

export const ContainerAbout = styled.div `
  display: flex;
  flex-direction: column;
  width: 95;
  height: auto;
  min-height: 660px;
  min-width: 360px;
  padding: 40px 70px;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    padding: 50px;
  } 
  @media (max-width: 630px) {
    padding: 20px;
  } 
`

export const SectionProject = styled.section `
  width: 100%;

  &:nth-child(1) > h3:nth-child(1)
  {
    text-align: center;
  }
  &:nth-child(1) > h3:nth-child(4)
  {
    text-align: center;
  }
`
export const ProjectTitle = styled.h1 `
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary3};
  line-height: 28px;

  a {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary3};
    line-height: 28px;
    text-decoration: none;

    &:hover {
      font-size: 20px;
      font-weight: 600;
    }
  }
`

export const ProjectSubTitle = styled.h3 `
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary3};
  margin: 15px 0 7px 0;
`

export const ProjectText = styled.ul `
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary3};
  margin: 10px 0;
`

export const DevText = styled.div `
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary3};
  margin: 10px 0;

  spam {
    font-size: 19px;
    font-weight: 500;
    font-style: italic;
    align-items: center;
  }
`

export const Underline = styled.div `
  width: 100%;
  height: 4px;
  background: ${(props) => props.theme.colors.primary3};
  margin: 12px 0;
`

export const DevInfo = styled.div ``

export const DevStacks = styled.ul `
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary3};
  margin-bottom: 20px;

  li {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary3};
    margin-left: 80px;
  }
`