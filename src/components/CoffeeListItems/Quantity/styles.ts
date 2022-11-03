import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`

export const QuantitySelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 72px;
  height: 38px;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
  overflow: hidden;

  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme['gray-900']};

  button {
    width: 38px;
    height: 100%;
    font-size: 1.25rem;

    color: ${(props) => props.theme['purple-500']};

    background: none;
    border-radius: 0px;
    border: none;

    &:hover {
      //background: none;
      border: none;
      color: ${(props) => props.theme['purple-900']};
    }
  }
`

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-900']};

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }

  svg {
    fill: ${(props) => props.theme.white};
  }
`