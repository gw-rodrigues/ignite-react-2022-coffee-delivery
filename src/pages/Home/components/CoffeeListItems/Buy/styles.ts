import styled from 'styled-components'

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.4375rem;

  margin: 0 1.5rem 1.25rem 1.5rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span:first-of-type {
    font-size: 0.875rem;
    line-height: 1rem;
  }
  span:last-of-type {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.95rem;
    margin-left: 0.2rem;
  }
`

export const ActionsContainer = styled.div`
  width: 118px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
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
