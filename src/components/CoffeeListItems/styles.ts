import styled from 'styled-components'

export const CoffeeListItemsContainer = styled.li`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    position: relative;
    width: 120px;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -20px;
    }
  }

  h3 {
    margin: 1rem 1.25rem 0.75rem 1.25rem;
  }

  p {
    margin: 0 1.25rem 2.0625rem 1.25rem;
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const TypeOfCoffeeList = styled.ul`
  list-style: none;
  color: ${(props) => props.theme['yellow-900']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  li {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-100']};
  }
`
