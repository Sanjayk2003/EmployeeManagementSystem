
import './App.css'
import EmployeeComponent from './assets/Components/EmployeeComponent'
import FooterComponent from './assets/Components/FooterComponent'
import HeaderComponent from './assets/Components/HeaderComponent'
import ListEmployeeComponent from './assets/Components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
        {/* //http://localhost:3000 */}
            <Route path="/" element={<ListEmployeeComponent/>}></Route>
        {/* //http://localhost:3000/employees */}
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
        {/* //http://localhost:3000/add-employee */}
            <Route path="/add-employee" element={<EmployeeComponent/>}></Route>

            {/* //http://localhost:3000/edit-employee */}
            <Route path ="/edit-employee/:id"element={<EmployeeComponent/> }></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
