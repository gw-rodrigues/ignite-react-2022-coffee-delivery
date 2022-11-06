import styled from 'styled-components'

export const AddressContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-500']};
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

  section {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.75rem;

      input,
      div {
        flex: 1;
      }
    }
  }
`
