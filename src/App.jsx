import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header/Header'
import ProductTable from './ProductTable/ProductTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ProductTable />
    </div>
  )
}

export default App
