import { QuantitySelect } from './styles'

export function QuantityButton() {
  return (
    <QuantitySelect>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </QuantitySelect>
  )
}
