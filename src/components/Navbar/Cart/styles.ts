import styled from 'styled-components'

export const CartContainer = styled.button`
  position: relative;
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

export const CartItemsCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme['yellow-500']};
  border-radius: 1000px;
  padding: 0.15rem 0.15rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.06em;
  color: ${(props) => props.theme.white};
`
