import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Main from './Components/Main/Main'
import HomePage from './Components/Home/HomePage'
import { Aboutus } from './Components/About Us/Aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
<Router>
<Routes>
  <Route path='/' element={<Main />} >
   <Route index element={<HomePage />} />
   <Route path='/aboutus' element={<Aboutus/>}/>
  </Route>
</Routes>

</Router>
   
  )
}

export default App
