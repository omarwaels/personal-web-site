import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/banner';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Banner/>}>
      </Route>
      <Route path='/Skills' element={<Skills/>}>

      </Route>
      <Route path='/Projects' element={<Projects/>}>

      </Route>
      <Route path='/Info' element={<Projects/>}>

      </Route>




    </Routes>
    <Footer/>
    </>
  );
}

export default App;
