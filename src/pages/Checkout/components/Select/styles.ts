import styled from 'styled-components'

const SELECT_SIZE_LIST = {
  sm: 'inputSM',
  md: 'inputMD',
  lg: 'inputLG',
} as const

interface ISelectSize {
  inputSize: keyof typeof SELECT_SIZE_LIST
}

export const SelectElement = styled.select<ISelectSize>`
  max-width: ${(props) => props.theme[SELECT_SIZE_LIST[props.inputSize]]};

  &:disabled {
    color: ${(props) => props.theme['gray-600']} !important;
  }
`
