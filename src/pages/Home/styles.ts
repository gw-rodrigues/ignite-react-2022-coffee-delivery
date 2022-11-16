import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-bottom: 9.81rem;

  @media (max-width: 1200px) {
    padding: 2rem;
  }
`

export const CoffeeListContainer = styled.ul`
  width: 100%;
  max-width: 1120px;
  margin: 2.125rem auto;
  list-style: none;

  display: flex;
  justify-content: flex-start;

  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`
