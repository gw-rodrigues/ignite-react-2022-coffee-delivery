import { useEffect, useState } from 'react'
import { QuantitySelect } from './styles'

interface IQuantityButtonProps {
  defaultValue: number
  handleUpdateQuantity: (quantity: number) => void
}

export function QuantityButton({
  defaultValue,
  handleUpdateQuantity,
}: IQuantityButtonProps) {
  const [quantity, setQuantity] = useState(defaultValue)

  function handleAddProductQuantity() {
    if (quantity === 9) return
    setQuantity((prev) => prev + 1)
  }

  function handleRemoveProductQuantity() {
    if (quantity === 1) return
    setQuantity((prev) => prev - 1)
  }

  useEffect(() => {
    handleUpdateQuantity(quantity)
  }, [quantity])

  return (
    <QuantitySelect>
      <button type="button" onClick={handleRemoveProductQuantity}>
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleAddProductQuantity}>
        +
      </button>
    </QuantitySelect>
  )
}
