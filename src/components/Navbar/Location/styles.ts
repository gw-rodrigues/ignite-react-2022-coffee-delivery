import styled from 'styled-components'
import { MapPin } from 'phosphor-react'

export const LocalizationContainer = styled.button`
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
`
