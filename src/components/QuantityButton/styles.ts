import styled from 'styled-components'

export const QuantitySelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 72px;
  height: 100%;
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
      border: none;
      color: ${(props) => props.theme['purple-900']};
    }

    &:focus {
      box-shadow: none;
      background: ${(props) => props.theme['gray-400']};
    }
  }
`
