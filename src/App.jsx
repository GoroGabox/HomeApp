import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar, Footer, PDF} from './components';
import { RegisterPage, LoginPage, HomePage, CalculatorPage, ListPage, GuidePage } from './pages';
import { AuthProvider } from "./context/AuthContext";
import { CalculatorProvider } from './context/CalculatorContext';

function App() {

  return (
    <BrowserRouter>
        <AuthProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path="/calculator/*"
              element={
                <CalculatorProvider>
                  <Routes>
                    <Route path='/' element={<CalculatorPage/>}></Route>
                    <Route path='/list' element={<ListPage/>}></Route>
                    <Route path='/guide' element={<GuidePage/>}></Route>
                  </Routes>
                </CalculatorProvider>
              }
            />
          </Routes>
          <Footer/>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
