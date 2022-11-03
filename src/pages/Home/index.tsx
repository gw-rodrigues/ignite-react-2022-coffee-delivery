import { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner'
import { CoffeeListItems } from '../../components/CoffeeListItems'
import { CoffeeListContainer, MainContainer } from './styles'

export type TCoffee = {
  id: string
  name: string
  description: string
  price: string
  type: string[]
  quantity: number
}

export function Home() {
  const [coffeeList, setCoffeeList] = useState<TCoffee[]>([])

  useEffect(() => {
    setCoffeeList([
      {
        id: 'Expresso_Tradicional',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        type: ['Tradicional'],
        quantity: 10,
      },
      {
        id: 'Expresso_Americano',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '9,90',
        type: ['Tradicional'],
        quantity: 10,
      },
      {
        id: 'Expresso_Cremoso',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '9,90',
        type: ['Tradicional'],
        quantity: 10,
      },
      {
        id: 'Expresso_Gelado',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '9,90',
        type: ['Tradicional', 'gelado'],
        quantity: 10,
      },
      {
        id: 'Café_com_Leite',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: '9,90',
        type: ['Tradicional', 'com leite'],
        quantity: 10,
      },
      {
        id: 'Latte',
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        type: ['Tradicional', 'com leite'],
        quantity: 10,
      },
      {
        id: 'Capuccino',
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: '9,90',
        type: ['Tradicional', 'com leite'],
        quantity: 10,
      },
      {
        id: 'Macchiato',
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: '9,90',
        type: ['Tradicional', 'com leite'],
        quantity: 10,
      },
      {
        id: 'Mocaccino',
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        type: ['Tradicional', 'com leite'],
        quantity: 10,
      },
      {
        id: 'Chocolate Quente',
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '9,90',
        type: ['com leite', 'especial'],
        quantity: 10,
      },
      {
        id: 'Cubano',
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
        type: ['gelado', 'alcoólico', 'especial'],
        quantity: 10,
      },
      {
        id: 'Havaiano',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
        type: ['especial'],
        quantity: 10,
      },
      {
        id: 'Árabe',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
        type: ['especial'],
        quantity: 10,
      },
      {
        id: 'Irlandês',
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        type: ['especial', 'alcoólico'],
        quantity: 10,
      },
    ])
  }, [])

  return (
    <>
      <Banner />
      <MainContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {coffeeList.map((coffee) => (
            <CoffeeListItems coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </MainContainer>
    </>
  )
}
