import styled from 'styled-components'

export const FooterWrapper = styled.footer `
  background: ${(props) => props.theme.colors.primary14};
  color: ${(props) => props.theme.colors.grey1};
  font-size: 17px;
  text-align: center;
  min-width: 360px;
`

export const CopyRight = styled.p `
  span {
    font-family: Georgia;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    color: ${(props) => props.theme.colors.redmd};
    padding: 10px;

    
    @media (max-width: 630px) {
      font-size: 14px;
    }
  }
`