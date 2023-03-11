import { useState } from 'react'
import './App.css'
import { DevInfo } from './components/DevInfo/DevInfo'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Container } from './container/Container'
import { ThemeContext } from './context/ThemeContext/ThemeContext'

function App() {

  const [isLightMode, setIsLightMode] = useState(false);


  return (
 <ThemeContext.Provider value={{ setIsLightMode, isLightMode }}>
    <div className="App">
      <Container>
        <Header />
        <SearchBar />
        <DevInfo />
      </Container>
    </div>
 </ThemeContext.Provider>
  )
}

export default App
