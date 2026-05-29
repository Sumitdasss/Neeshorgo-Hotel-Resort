
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import Fotter from './Componant/Layout/Fotter'
import NavBAr from './Componant/Layout/NavBAr'

import Home from './Componant/Page/Home'
import Room from './Componant/Page/Room'
import RoomDetails from './Componant/Layout/RoomDitails'

function App() {
  
  return (
    <>
<BrowserRouter>
   <NavBAr/>
<Routes>

<Route index path="/" element={<Home/>}  ></Route>
<Route path="/rooms" element={<Room/>}  ></Route>
<Route path="/roomsdetails/:id" element={<RoomDetails/>}  ></Route>



</Routes>


 <Fotter/>

</BrowserRouter>



 
   
   
    </>
  )
}

export default App
