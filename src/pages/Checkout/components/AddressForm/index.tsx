import { MapPinLine } from 'phosphor-react'
import { Input } from '../../components/Input'
import { AddressContainer } from './styles'

export function AddressForm() {
  return (
    <AddressContainer>
      <header>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <section>
        <Input type="text" placeholder="CEP" inputSize="md" />
        <Input type="text" placeholder="Rua" />
        <div>
          <Input type="number" placeholder="Número" inputSize="md" />
          <Input type="text" placeholder="Complemento" optional />
        </div>
        <div>
          <Input type="text" placeholder="Bairro" inputSize="md" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" inputSize="sm" />
        </div>
      </section>
    </AddressContainer>
  )
}
