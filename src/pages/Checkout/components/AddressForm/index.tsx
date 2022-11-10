import { MapPinLine } from 'phosphor-react'
import { Input } from '../../components/Input'
import { Select } from '../Select'
import { AddressContainer } from './styles'

const listUf = [
  { name: 'Rondônia', uf: 'RO' },
  { name: 'Acre', uf: '	AC' },
  { name: 'Amazonas', uf: '	AM' },
  { name: 'Roraima', uf: '	RR' },
  { name: 'Pará', uf: '	PA' },
  { name: 'Amapá', uf: '	AP' },
  { name: 'Tocantins', uf: '	TO' },
  { name: 'Maranhão', uf: '	MA' },
  { name: 'Piauí', uf: '	PI' },
  { name: 'Ceará', uf: '	CE' },
  { name: 'Rio Grande do Norte', uf: '	RN' },
  { name: 'Paraíba', uf: '	PB' },
  { name: 'Pernambuco', uf: '	PE' },
  { name: 'Alagoas', uf: '	AL' },
  { name: 'Sergipe', uf: '	SE' },
  { name: 'Bahia', uf: '	BA' },
  { name: 'Minas Gerais', uf: '	MG' },
  { name: 'Espírito Santo', uf: '	ES' },
  { name: 'Rio de Janeiro', uf: '	RJ' },
  { name: 'São Paulo', uf: '	SP' },
  { name: 'Paraná', uf: '	PR' },
  { name: 'Santa Catarina', uf: '	SC' },
  { name: 'Rio Grande do Sul (*)', uf: '	RS' },
  { name: 'Mato Grosso do Sul', uf: '	MS' },
  { name: 'Mato Grosso', uf: '	MT' },
  { name: 'Goiás', uf: '	GO' },
  { name: 'Distrito Federal', uf: '	DF' },
]

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

          <Select id="uf" defaultValue="" inputSize="sm">
            <option value="" disabled>
              UF
            </option>
            {listUf.map(({ uf }) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </Select>
        </div>
      </section>
    </AddressContainer>
  )
}
