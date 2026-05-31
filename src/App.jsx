
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import Fotter from './Componant/Layout/Fotter'
import NavBAr from './Componant/Layout/NavBAr'

import Home from './Componant/Page/Home'
import Room from './Componant/Page/Room'
import RoomDetails from './Componant/Layout/RoomDitails'
import Booking from './Componant/Page/Booking'
import JuiceBar from './Componant/Page/JuiceBar'
import Resturant from './Componant/Page/Resturant'
import Facilities from './Componant/Page/Fasalites'
import Amenities from './Componant/Page/Amenities'
import About from './Componant/Page/About'
import Contact from './Componant/Page/Contact'
import Login from './Componant/Page/Login'
import Singup from './Componant/Page/Singup'
import Dashboard from './Componant/Page/Deshbord'


function App() {
  
  return (
    <>
<BrowserRouter>
   <NavBAr/>
<Routes>

<Route index path="/" element={<Home/>}  ></Route>
<Route path="/rooms" element={<Room/>}  ></Route>
<Route path="/roomsdetails/:id" element={<RoomDetails/>}  ></Route>
<Route path="/booking" element={<Booking/>}  ></Route>
<Route path="/juice" element={<JuiceBar/>}  ></Route>
<Route path="/restaurants" element={<Resturant/>}  ></Route>
<Route path="/facilities" element={<Facilities/>}  ></Route>
<Route path="/amenities" element={<Amenities/>}  ></Route>
<Route path="/about" element={<About/>}  ></Route>
<Route path="/contact" element={<Contact/>}  ></Route>
<Route path="/login" element={<Login/>}  ></Route>
<Route path="/signup" element={<Singup/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>



</Routes>


 <Fotter/>

</BrowserRouter>



 
   
   
    </>
  )
}

export default App
