import styled from 'styled-components'

export const LocalizationContainer = styled.div`
  position: relative;
`

export const LocalizationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-100']};

  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-900']};
  text-transform: none;

  transition: box-shadow 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple-100']};
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }

  svg {
    fill: ${(props) => props.theme['purple-500']};
  }

  @media (max-width: 400px) {
    font-size: 0.65rem;
  }
`

interface ILocationListIsHiddenProps {
  hidden: boolean
}

export const LocalizationList = styled.div<ILocationListIsHiddenProps>`
  width: 230px;
  position: absolute;
  left: -35px;
  margin-top: 0.3rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};

  display: ${(props) => (props.hidden ? 'none' : 'grid')};
  border: 1px solid
    ${(props) => (props.hidden ? 'transparent' : props.theme['purple-100'])};

  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;

  button {
    font-size: 0.6rem;
    padding: 1.5rem 0.5rem;
    border: 1px solid transparent;

    &:hover {
      background: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }
  }

  @media (max-width: 400px) {
    left: -20px;
  }
`
