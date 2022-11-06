import { useEffect, useState } from 'react'
import { getCoffeeList } from '../../hooks/coffeeData'
import { Banner } from './components/Banner'
import { CoffeeListItems } from './components/CoffeeListItems'
import { CoffeeListContainer, MainContainer } from './styles'

export type TCoffee = {
  id: string
  name: string
  description: string
  price: string
  types: string[]
  quantity: number
  image: string
}

export function Home() {
  const [coffeeList, setCoffeeList] = useState<TCoffee[]>([])

  useEffect(() => {
    const receivedCoffeeList = getCoffeeList()
    setCoffeeList(receivedCoffeeList)
  }, [])

  return (
    <>
      <Banner />
      <MainContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {coffeeList.map((coffee) => (
            <CoffeeListItems key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </MainContainer>
    </>
  )
}
