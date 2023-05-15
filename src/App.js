import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Error from './components/Error';
import { GlobalStyle } from './components/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Protected from './components/Protected';
import Register from './components/Register';
import Loginwithlocalstorage from './components/Loginwithlocalstorage';

function App() {
  const theme = {
    colors:{
      bg:"#000",

    },
    media:{
      mobile:'768px',
      tab:'998px',
    }
  };
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Loginwithlocalstorage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element = {<Protected Component = {Cart}/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
