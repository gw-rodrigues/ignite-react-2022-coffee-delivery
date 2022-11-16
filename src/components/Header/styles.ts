import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  img {
    width: 85px;
    height: auto;
  }

  @media (max-width: 1200px) {
    padding: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    justify-content: center;
  }
`
