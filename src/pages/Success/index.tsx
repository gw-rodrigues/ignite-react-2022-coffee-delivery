import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { listPaymentMethods } from '../Checkout'

import deliveryImage from '../../assets/Bike-delivery.svg'
import {
  StatusContainer,
  StatusIcon,
  StatusInnerContainer,
  StatusInnerContent,
  SuccessContainer,
  SuccessContent,
} from './styles'

export function Success() {
  const location = useLocation()
  const {
    street,
    houseNumber,
    houseComplement,
    district,
    city,
    uf,
    paymentMethod,
  } = location.state

  return (
    <SuccessContainer>
      <header>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <SuccessContent>
        <StatusContainer>
          <StatusInnerContainer>
            <StatusInnerContent>
              <StatusIcon bgColor="purple">
                <MapPin size={16} weight="fill" />
              </StatusIcon>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {street}, {houseNumber} {houseComplement}
                  </strong>
                </p>
                <p>
                  {district} - {city}, {uf}
                </p>
              </div>
            </StatusInnerContent>
            <StatusInnerContent>
              <StatusIcon bgColor="yellow">
                <Timer size={16} weight="fill" />
              </StatusIcon>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min </strong>
                </p>
              </div>
            </StatusInnerContent>
            <StatusInnerContent>
              <StatusIcon bgColor=" yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </StatusIcon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>
                    {paymentMethod &&
                      listPaymentMethods[
                        paymentMethod as keyof typeof listPaymentMethods
                      ]}
                  </strong>
                </p>
              </div>
            </StatusInnerContent>
          </StatusInnerContainer>
        </StatusContainer>
        <img src={deliveryImage} alt="Bike delivery" />
      </SuccessContent>
    </SuccessContainer>
  )
}
