import styled from 'styled-components'

export const CartContainer = styled.button`
  background: ${(props) => props.theme['yellow-100']};
  transition: box-shadow 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-100']};
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-500']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-500']};
  }

  svg {
    fill: ${(props) => props.theme['yellow-500']};
  }
`
