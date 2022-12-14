import styled from 'styled-components'

export const CoffeeListItemsContainer = styled.li`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 0.5rem;
  border: 1px solid transparent;

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

  transition: border-color 0.3s;

  &:hover {
    border-color: ${(props) => props.theme['gray-600']};
  }

  &:hover figure img {
    animation: spin 10s linear infinite;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
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
