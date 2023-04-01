import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar} from './components';
import { RegisterPage, LoginPage, HomePage, PlansPage, CalculatorPage } from './pages';
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
            <Route path='/plans' element={<PlansPage/>}/>
            <Route path='/calculator' element={<CalculatorPage/>}/>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
