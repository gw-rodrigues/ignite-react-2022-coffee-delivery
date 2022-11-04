import styled from 'styled-components'

export const OrderContainer = styled.div`
  flex: 1;
  max-width: 448px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.9375rem;
`

export const OrderItems = styled.div`
  width: 100%;
  max-width: 640px;

  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px 6px 44px;
`

export const OrderItem = styled.div`
  width: 100%;
  padding: 1.5rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }
`

export const ActionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ActionsButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  width: 91px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  line-height: 1.7;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const ItemPrice = styled.span`
  font-weight: 700;
  line-height: 1.3;
  font-size: 1rem;
`

export const TotalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    span:last-of-type {
      font-size: 1rem;
    }

    &:last-of-type {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};

      span:last-of-type {
        font-size: 1.25rem;
      }
    }
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  padding: 12px 8px;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};

  &:hover {
    background: ${(props) => props.theme['yellow-900']};
  }
`
