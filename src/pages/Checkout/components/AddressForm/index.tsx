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
        <Input
          id="cep"
          type="number"
          placeholder="CEP"
          inputSize="md"
          max={99999999}
          min={11111111}
          required
        />
        <Input id="street" type="text" placeholder="Rua" required />
        <div>
          <Input
            id="houseNumber"
            type="number"
            placeholder="Número"
            inputSize="md"
            required
          />
          <Input
            id="houseComplement"
            type="text"
            placeholder="Complemento"
            optional
          />
        </div>
        <div>
          <Input
            id="district"
            type="text"
            placeholder="Bairro"
            inputSize="md"
            required
          />
          <Input id="city" type="text" placeholder="Cidade" required />
          <Input
            id="uf"
            type="number"
            placeholder="UF"
            inputSize="sm"
            min={1}
            max={26}
            required
          />
        </div>
      </section>
    </AddressContainer>
  )
}
