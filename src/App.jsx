import {Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import OnePokemonPage from './pages/OnePokemonPage/OnePokemonPage'
import PokemonsPage from './pages/PokemonsPage/PokemonsPage'

function App() {

  const isActive = ({isActive}) => isActive ? 'active' : 'inactive'

  return (
    <>
      <nav>
        <ul className='navs'>
          <li><NavLink to={'/'} className={isActive}>Main</NavLink></li>
          <li><NavLink to={'/pokemons'} className={isActive}>Pokemons</NavLink></li>
          <li><NavLink to={'/about'} className={isActive}>About</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/pokemons' element={<PokemonsPage/>}/>
        <Route path='/pokemon/:name' element={<OnePokemonPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </>
    
  )
}

export default App
