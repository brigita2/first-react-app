import { Routes, Route, Link, NavLink } from 'react-router-dom';
import ContactUs from './Pages/ContactUs/ContactUs';
import DemoPage from './Pages/DemoPage/DemoPage';
import ProgramsPage from "./Pages/CodeAcademyProgramsPage/ProgramsPage/ProgramsPage";
import CounterPage from './Pages/CounterPage/CounterPage';
import ShoppingList from './Pages/ShoppingList/ShoppingList';
import CitiesPage from './Pages/CitiesPage/CitiesPage';
import ToDoPage from './Pages/ToDoPage/ToDoPage';
import ChuckNorrisPage from './Pages/ChuckNorrisPage/ChuckNorrisPage';


function App() {
  return (
    <div className='App'>
      
      <nav className='main-navigation'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/demo' className='nav-link'>Demo Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/contact-us' className='nav-link'>Contact Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/programs' className='nav-link'>Programs Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/counter' className='nav-link'>Counters Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/shopping-list' className='nav-link'>Shopping List</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/cities' className='nav-link'>Cities Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/to-do' className='nav-link'>To do Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/api/chuck-norris' className='nav-link'>Chuck API Page</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/shopping-list' element={<ShoppingList />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/to-do' element={<ToDoPage />} />
        <Route path='/api/chuck-norris' element={<ChuckNorrisPage />} />
        <Route path='*' element={
          <><h1>404 error. Page not found</h1><Link to='/'>Go Back to Home Page</Link></>
        }/>
      </Routes>
      
    </div>
  );
}

export default App;
