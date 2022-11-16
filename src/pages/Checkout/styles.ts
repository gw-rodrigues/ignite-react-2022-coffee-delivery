import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 9.81rem auto;

  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
  }
`

export const FormContainer = styled.div`
  flex: 1 0 100%;
  width: 100%;
  max-width: 640px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.9375rem;

  h3 {
    font-size: 1.125rem;
  }

  @media (max-width: 760px) {
    padding: 1rem;
  }
`
