
import { Outlet } from 'react-router-dom'
import './App.css'
import NaveBar from './Components/NaveBar'


function App() {
  

  return (
    <div className='p-5'>
      <NaveBar></NaveBar>
     
      
      <Outlet></Outlet>
    </div>
  )
}

export default App
