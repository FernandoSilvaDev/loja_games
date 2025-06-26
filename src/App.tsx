// Rodar o servidor dos produtos que simula um API: npx json-server db.json --port 4000
// Depois iniciar o projeto com: npm start

import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
