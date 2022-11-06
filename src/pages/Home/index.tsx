import { useEffect, useState } from 'react'
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
    setCoffeeList([
      {
        id: 'Expresso_Tradicional',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        types: ['Tradicional'],
        quantity: 10,
        image: 'Expresso.svg',
      },
      {
        id: 'Expresso_Americano',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '9,90',
        types: ['Tradicional'],
        quantity: 10,
        image: 'Americano.svg',
      },
      {
        id: 'Expresso_Cremoso',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '9,90',
        types: ['Tradicional'],
        quantity: 10,
        image: 'Expresso-Cremoso.svg',
      },
      {
        id: 'Expresso_Gelado',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '9,90',
        types: ['Tradicional', 'gelado'],
        quantity: 10,
        image: 'Cafe-Gelado.svg',
      },
      {
        id: 'Café_com_Leite',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: '9,90',
        types: ['Tradicional', 'com leite'],
        quantity: 10,
        image: 'Cafe-com-Leite.svg',
      },
      {
        id: 'Latte',
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        types: ['Tradicional', 'com leite'],
        quantity: 10,
        image: 'Latte.svg',
      },
      {
        id: 'Capuccino',
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: '9,90',
        types: ['Tradicional', 'com leite'],
        quantity: 10,
        image: 'Capuccino.svg',
      },
      {
        id: 'Macchiato',
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: '9,90',
        types: ['Tradicional', 'com leite'],
        quantity: 10,
        image: 'Macchiato.svg',
      },
      {
        id: 'Mocaccino',
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        types: ['Tradicional', 'com leite'],
        quantity: 10,
        image: 'Mocaccino.svg',
      },
      {
        id: 'Chocolate Quente',
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '9,90',
        types: ['com leite', 'especial'],
        quantity: 10,
        image: 'Chocolate-Quente.svg',
      },
      {
        id: 'Cubano',
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
        types: ['gelado', 'alcoólico', 'especial'],
        quantity: 10,
        image: 'Cubano.svg',
      },
      {
        id: 'Havaiano',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
        types: ['especial'],
        quantity: 10,
        image: 'Havaiano.svg',
      },
      {
        id: 'Árabe',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
        types: ['especial'],
        quantity: 10,
        image: 'Arabe.svg',
      },
      {
        id: 'Irlandês',
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        types: ['especial', 'alcoólico'],
        quantity: 10,
        image: 'Irlandes.svg',
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
            <CoffeeListItems key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </MainContainer>
    </>
  )
}
