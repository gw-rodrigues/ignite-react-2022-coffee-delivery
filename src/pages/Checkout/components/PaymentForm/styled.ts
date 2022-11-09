import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
    div {
      padding-top: 0.05rem;
      line-height: 1.3;
      font-size: 0.875rem;

      h4 {
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-800']};
      }
    }
  }
`

export const PaymentMethodSelectContainer = styled.fieldset`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
  border: none;
`

interface IButtonSelected {
  selected?: boolean
}

export const PaymentMethodSelectButton = styled.div<IButtonSelected>`
  flex: 1;
  position: relative;

  input[type='radio'] {
    position: absolute;
    left: -100vw;
  }

  label {
    width: 178.67px;
    height: 51px;
    padding: 16px;
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 1.7;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid
      ${(props) => (props.selected ? props.theme['purple-500'] : 'transparent')};

    background: ${(props) =>
      props.selected ? props.theme['purple-100'] : props.theme['gray-300']};

    transition: border-color 0.2s;

    &:hover {
      border-color: ${(props) => props.theme['purple-500']};
    }

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
