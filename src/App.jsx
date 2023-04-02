import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar, Footer} from './components';
import { RegisterPage, LoginPage, HomePage, CalculatorPage } from './pages';
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <BrowserRouter>
        <AuthProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/calculator' element={<CalculatorPage/>}/>
          </Routes>
          <Footer/>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
