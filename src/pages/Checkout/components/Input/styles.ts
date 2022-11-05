import styled from 'styled-components'

const INPUT_SIZE_LIST = {
  sm: 'inputSM',
  md: 'inputMD',
  lg: 'inputLG',
} as const

interface IInputSize {
  inputSize: keyof typeof INPUT_SIZE_LIST
}

export const InputElement = styled.input<IInputSize>`
  max-width: ${(props) => props.theme[INPUT_SIZE_LIST[props.inputSize]]};
`
export const InputOptionalElement = styled.div<IInputSize>`
  max-width: ${(props) => props.theme[INPUT_SIZE_LIST[props.inputSize]]};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 42px;
  padding: 0;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  background: ${(props) => props.theme['gray-200']};
  transition: border-color 0.2s, color 0.2s;

  input {
    width: 100%;
    background: none;
    border: none;
  }

  span {
    padding: 0.75rem;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-600']};
  }

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-500']};
  }
`
