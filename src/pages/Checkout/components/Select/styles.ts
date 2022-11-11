import styled from 'styled-components'

const SELECT_SIZE_LIST = {
  sm: 'inputSM',
  md: 'inputMD',
  lg: 'inputLG',
} as const

interface ISelectSize {
  inputSize: keyof typeof SELECT_SIZE_LIST
  valueSelected: boolean
}

export const SelectElement = styled.select<ISelectSize>`
  max-width: ${(props) => props.theme[SELECT_SIZE_LIST[props.inputSize]]};
  color: ${(props) =>
    props.valueSelected
      ? props.theme['gray-700']
      : props.theme['gray-600']} !important;
`
