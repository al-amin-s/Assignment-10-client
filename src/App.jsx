
import { Outlet } from 'react-router-dom'
import './App.css'
import NaveBar from './Components/NaveBar'
import Footer from './Components/Footer'


function App() {
  

  return (
    <div className='p-5'>
      <NaveBar></NaveBar>
     
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
