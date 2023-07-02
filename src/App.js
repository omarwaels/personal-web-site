
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/banner';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Info } from './components/Info';
import Swal from 'sweetalert2'


Swal.fire({
  title: '<strong>Notice </strong>',
  icon: 'info',
  html:
    'The Website last updated  7 / 2 / 2023 ' ,

  showCloseButton: true,
  
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down',
  timer: 2500
})

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
      <Route path='/Info' element={<Info/>}>

      </Route>




    </Routes>
    <Footer/>
    </>
  );
}

export default App;
