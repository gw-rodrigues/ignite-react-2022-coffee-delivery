import styled from 'styled-components'

export const ErrorsContainer = styled.div`
  width: 100%;
  padding: 1.5rem 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.red};
`
