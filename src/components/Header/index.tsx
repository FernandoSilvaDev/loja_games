import { RootReducer } from '../../store'
import { Carousel } from 'react-bootstrap'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <div>
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/GTA6.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Forza-Motorsport.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Back_Myth_Wukong.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Cyber-Punk-Liberty-City.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
      <S.Header>
        <h1>Loja Games</h1>
        <div>
          <img src={cesta} />
          <span>
            {itens.length} itens, valor total: {paraReal(valorTotal)}
          </span>
        </div>
      </S.Header>
    </div>
  )
}

export default Header
